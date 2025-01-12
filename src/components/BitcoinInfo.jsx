import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CircularProgress } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { fetchBitcoinPrice } from '../services/api';

const BitcoinInfo = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBitcoinPrice();
        setBitcoinData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
    // Fetch data every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, color: 'error.main' }}>
        Error loading Bitcoin data: {error}
      </Box>
    );
  }

  const priceChange = bitcoinData?.usd_24h_change || 0;
  const isPositiveChange = priceChange >= 0;

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box
            component="img"
            src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
            alt="Bitcoin"
            sx={{ width: 32, height: 32 }}
          />
          <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
            Bitcoin
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: 'text.secondary',
              bgcolor: 'rgba(128, 138, 157, 0.1)',
              px: 1,
              py: 0.5,
              borderRadius: 1,
            }}
          >
            BTC
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            ${bitcoinData?.usd.toLocaleString()}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            ₹{bitcoinData?.inr.toLocaleString()}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: isPositiveChange ? '#EBF9F4' : '#FFE9E9',
              color: isPositiveChange ? '#14B079' : '#F7324C',
              px: 2,
              py: 0.75,
              borderRadius: 2,
            }}
          >
            {isPositiveChange ? (
              <ArrowUpward sx={{ fontSize: 20, mr: 0.5 }} />
            ) : (
              <ArrowDownward sx={{ fontSize: 20, mr: 0.5 }} />
            )}
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {Math.abs(priceChange).toFixed(2)}%
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            (24H)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BitcoinInfo;
