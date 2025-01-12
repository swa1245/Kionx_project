import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CircularProgress, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack, TrendingUp } from '@mui/icons-material';
import { fetchTrendingCoins } from '../services/api';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingCoins();
        setTrendingCoins(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderCoinCard = (coin) => (
    <Card 
      key={coin.item.id}
      sx={{ 
        mb: 2,
        borderRadius: 2,
        boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            component="img"
            src={coin.item.small}
            alt={coin.item.name}
            sx={{ width: 24, height: 24 }}
          />
          <Box>
            <Typography variant="subtitle2">
              {coin.item.symbol.toUpperCase()}
            </Typography>
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: coin.item.data.price_change_percentage_24h?.usd >= 0 
                  ? '#EBF9F4' 
                  : '#FFE9E9',
                color: coin.item.data.price_change_percentage_24h?.usd >= 0
                  ? '#14B079'
                  : '#F7324C',
                px: 1,
                py: 0.5,
                borderRadius: 1,
                mt: 0.5
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 500 }}>
                {coin.item.data.price_change_percentage_24h?.usd?.toFixed(2)}%
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <img 
            src={coin.item.data.sparkline} 
            alt="Price trend"
            style={{ width: '100%', height: '40px' }}
          />
        </Box>
      </CardContent>
    </Card>
  );

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
        Error loading trending coins: {error}
      </Box>
    );
  }

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 1,
          mb: 2
        }}>
          <TrendingUp color="primary" />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Trending Coins (24h)
          </Typography>
        </Box>
        
        {trendingCoins.map(renderCoinCard)}

        {/* You May Also Like Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            You May Also Like
          </Typography>
          <Box 
            sx={{ 
              display: 'flex',
              gap: 2,
              overflowX: 'auto',
              pb: 2,
              '&::-webkit-scrollbar': {
                height: 6,
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#f1f1f1',
                borderRadius: 3,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#888',
                borderRadius: 3,
              },
            }}
          >
            {trendingCoins.concat(trendingCoins).map((coin) => (
              <Card 
                key={`carousel-${coin.item.id}`}
                sx={{ 
                  minWidth: 200,
                  flex: '0 0 auto',
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      component="img"
                      src={coin.item.small}
                      alt={coin.item.name}
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography variant="subtitle2">
                      {coin.item.symbol.toUpperCase()}
                    </Typography>
                    <Box 
                      sx={{ 
                        bgcolor: coin.item.data.price_change_percentage_24h?.usd >= 0 
                          ? '#EBF9F4' 
                          : '#FFE9E9',
                        color: coin.item.data.price_change_percentage_24h?.usd >= 0
                          ? '#14B079'
                          : '#F7324C',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        {coin.item.data.price_change_percentage_24h?.usd?.toFixed(2)}%
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <img 
                      src={coin.item.data.sparkline} 
                      alt="Price trend"
                      style={{ width: '100%', height: '40px' }}
                    />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrendingCoins;
