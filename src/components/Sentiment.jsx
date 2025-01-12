import React from 'react';
import { Paper, Typography, Box, LinearProgress } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewspaperIcon from '@mui/icons-material/Newspaper';

function Sentiment() {
  const sentimentScore = 76;

  const events = [
    {
      icon: <TrendingUpIcon sx={{ color: '#00B386', fontSize: 32 }} />,
      title: 'Lorem ipsum dolor sit amet consectetur',
      description: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      type: 'positive'
    },
    {
      icon: <NewspaperIcon sx={{ color: '#0082FF', fontSize: 32 }} />,
      title: 'Lorem ipsum dolor sit amet consectetur',
      description: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      type: 'neutral'
    },
  ];

  return (
    <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Sentiment
      </Typography>
      
      <Typography variant="subtitle1" gutterBottom sx={{ 
        display: 'flex', 
        alignItems: 'center',
        color: 'text.secondary',
        fontSize: '1rem',
        fontWeight: 500,
        mb: 2
      }}>
        Key Events
      </Typography>

      <Box sx={{ 
        display: 'flex',
        gap: 2,
        overflowX: 'auto',
        pb: 2,
        mb: 4,
        '&::-webkit-scrollbar': {
          height: 8,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1',
          borderRadius: 4,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: 4,
        },
      }}>
        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              minWidth: 320,
              p: 2,
              borderRadius: 2,
              bgcolor: event.type === 'positive' ? '#EBF9F4' : '#E8F4FF',
              display: 'flex',
              gap: 2,
            }}
          >
            <Box sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: event.type === 'positive' ? '#00B386' : '#0082FF',
              opacity: 0.1,
              position: 'relative',
            }}>
              {event.icon}
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Typography variant="subtitle1" gutterBottom sx={{ 
        display: 'flex', 
        alignItems: 'center',
        color: 'text.secondary',
        fontSize: '1rem',
        fontWeight: 500,
        mb: 2
      }}>
        Analyst Estimates
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mb: 3 }}>
        <Box sx={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          bgcolor: '#EBF9F4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Typography variant="h4" sx={{ color: '#00B386' }}>
            {sentimentScore}%
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          {[
            { label: 'Buy', value: 76, color: '#00B386' },
            { label: 'Hold', value: 8, color: '#C7C8CE' },
            { label: 'Sell', value: 16, color: '#F7324C' },
          ].map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="body2" sx={{ width: 40 }}>
                {item.label}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={item.value}
                sx={{
                  mx: 1,
                  flex: 1,
                  height: 8,
                  borderRadius: 4,
                  bgcolor: '#f0f0f0',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: item.color,
                  },
                }}
              />
              <Typography variant="body2" sx={{ width: 40 }}>
                {item.value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}

export default Sentiment;
