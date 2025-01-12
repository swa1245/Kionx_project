import React from 'react';
import { Paper, Typography, Box, Grid, LinearProgress } from '@mui/material';

const Technicals = () => {
  const technicalIndicators = {
    summary: {
      buy: 12,
      neutral: 8,
      sell: 6,
    },
    movingAverages: {
      buy: 10,
      neutral: 2,
      sell: 4,
    },
    technicalIndicators: {
      buy: 8,
      neutral: 6,
      sell: 2,
    },
  };

  const oscillators = [
    { name: 'RSI (14)', value: '45.16', signal: 'Neutral' },
    { name: 'CCI (20)', value: '-51.53', signal: 'Sell' },
    { name: 'ADX (14)', value: '20.35', signal: 'Neutral' },
    { name: 'MACD Level', value: '25.89', signal: 'Buy' },
    { name: 'Stoch RSI Fast', value: '17.23', signal: 'Sell' },
    { name: 'Williams %R', value: '-55.36', signal: 'Neutral' },
  ];

  const movingAverages = [
    { name: 'EMA (10)', value: '$46,532.25', signal: 'Buy' },
    { name: 'SMA (10)', value: '$46,245.15', signal: 'Buy' },
    { name: 'EMA (20)', value: '$45,876.33', signal: 'Buy' },
    { name: 'SMA (20)', value: '$45,765.52', signal: 'Buy' },
    { name: 'EMA (50)', value: '$44,987.65', signal: 'Buy' },
    { name: 'SMA (50)', value: '$44,756.87', signal: 'Buy' },
  ];

  const SignalIndicator = ({ signal }) => {
    const getColor = (signal) => {
      switch (signal.toLowerCase()) {
        case 'buy':
          return '#00B386';
        case 'sell':
          return '#F7324C';
        default:
          return '#808A9D';
      }
    };

    return (
      <Typography
        variant="body2"
        sx={{
          color: getColor(signal),
          bgcolor: `${getColor(signal)}15`,
          px: 1,
          py: 0.5,
          borderRadius: 1,
          display: 'inline-block',
        }}
      >
        {signal}
      </Typography>
    );
  };

  return (
    <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Technical Analysis
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          Summary
        </Typography>
        <Grid container spacing={2}>
          {['Buy', 'Neutral', 'Sell'].map((type) => (
            <Grid item xs={4} key={type}>
              <Box sx={{ textAlign: 'center', p: 2, bgcolor: '#F8FAFC', borderRadius: 2 }}>
                <Typography variant="h4" color={
                  type === 'Buy' ? '#00B386' : 
                  type === 'Sell' ? '#F7324C' : '#808A9D'
                }>
                  {technicalIndicators.summary[type.toLowerCase()]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {type}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          Oscillators
        </Typography>
        <Box sx={{ bgcolor: '#F8FAFC', p: 2, borderRadius: 2 }}>
          {oscillators.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1.5,
                borderBottom: index !== oscillators.length - 1 ? '1px solid #E7E7E8' : 'none',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {item.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2">
                  {item.value}
                </Typography>
                <SignalIndicator signal={item.signal} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Moving Averages
        </Typography>
        <Box sx={{ bgcolor: '#F8FAFC', p: 2, borderRadius: 2 }}>
          {movingAverages.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1.5,
                borderBottom: index !== movingAverages.length - 1 ? '1px solid #E7E7E8' : 'none',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {item.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2">
                  {item.value}
                </Typography>
                <SignalIndicator signal={item.signal} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default Technicals;
