import React from 'react';
import { Paper, Typography, Box, Grid, Divider } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Fundamentals = () => {
  const fundamentalsData = {
    price: {
      bitcoin: '$46,953.04',
      change24h: '+$1,432.98',
      change24hPercent: '+2.51%',
      tradingVolume: '$23.1B',
      volumeMarketCap: '0.03',
      marketDominance: '38.343%',
      marketRank: '#1',
    },
    marketCap: {
      marketCap: '$1.12T',
      fullyDiluted: '$1.28T',
      volume24h: '$38.02B',
      circulatingSupply: '19.6M BTC',
    },
  };

  const FundamentalItem = ({ label, value, info }) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, borderBottom: '1px solid #E7E7E8' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        {info && (
          <InfoOutlinedIcon 
            sx={{ 
              ml: 0.5, 
              fontSize: 16, 
              color: 'text.secondary',
              cursor: 'help',
            }} 
          />
        )}
      </Box>
      <Typography variant="body2">{value}</Typography>
    </Box>
  );

  return (
    <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Fundamentals
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FundamentalItem 
            label="Bitcoin Price" 
            value={fundamentalsData.price.bitcoin} 
          />
          <FundamentalItem 
            label="24h Low / 24h High" 
            value="$45,424.42 / $47,396.74" 
          />
          <FundamentalItem 
            label="7d Low / 7d High" 
            value="$44,109.32 / $48,912.72" 
          />
          <FundamentalItem 
            label="Trading Volume" 
            value={fundamentalsData.price.tradingVolume} 
          />
          <FundamentalItem 
            label="Market Cap Rank" 
            value={fundamentalsData.price.marketRank}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FundamentalItem 
            label="Market Cap" 
            value={fundamentalsData.marketCap.marketCap} 
            info
          />
          <FundamentalItem 
            label="Volume / Market Cap" 
            value={fundamentalsData.price.volumeMarketCap} 
            info
          />
          <FundamentalItem 
            label="All-Time High" 
            value="$69,044.77 -32.1%" 
          />
          <FundamentalItem 
            label="All-Time Low" 
            value="$67.81 +70,823.2%" 
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Supply
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FundamentalItem 
              label="Circulating Supply" 
              value={fundamentalsData.marketCap.circulatingSupply} 
            />
            <FundamentalItem 
              label="Total Supply" 
              value="21M BTC" 
            />
            <FundamentalItem 
              label="Max Supply" 
              value="21M BTC" 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FundamentalItem 
              label="Fully Diluted Market Cap" 
              value={fundamentalsData.marketCap.fullyDiluted} 
              info
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Fundamentals;
