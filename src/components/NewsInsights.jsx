import React from 'react';
import { Paper, Typography, Box, Grid, Avatar, Chip } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NewsInsights = () => {
  const news = [
    {
      title: "Bitcoin Surges Past $45K as Market Shows Strong Momentum",
      source: "CoinDesk",
      time: "2 hours ago",
      image: "https://www.coindesk.com/logo.png",
      sentiment: "positive"
    },
    {
      title: "Institutional Investors Increase Bitcoin Holdings Amid Market Rally",
      source: "Bloomberg",
      time: "5 hours ago",
      image: "https://www.bloomberg.com/logo.png",
      sentiment: "positive"
    },
    {
      title: "Analysis: Bitcoin's Technical Indicators Signal Bullish Trend",
      source: "Reuters",
      time: "8 hours ago",
      image: "https://www.reuters.com/logo.png",
      sentiment: "neutral"
    }
  ];

  const events = [
    {
      icon: <TrendingUpIcon sx={{ color: '#00B386', fontSize: 32 }} />,
      title: "Bitcoin Shows Strong On-Chain Activity",
      description: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      time: "3 hours ago",
      type: "positive"
    },
    {
      icon: <NewspaperIcon sx={{ color: '#0082FF', fontSize: 32 }} />,
      title: "New Regulatory Framework Proposed",
      description: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      time: "12 hours ago",
      type: "neutral"
    }
  ];

  return (
    <Box>
      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          Latest News
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {news.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                gap: 2,
                p: 2,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.02)',
                  cursor: 'pointer',
                },
              }}
            >
              <Avatar
                src={item.image}
                alt={item.source}
                variant="rounded"
                sx={{ width: 60, height: 60 }}
              />
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    {item.source}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {item.time}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                  {item.title}
                </Typography>
                <Chip
                  size="small"
                  label={item.sentiment}
                  sx={{
                    bgcolor: item.sentiment === 'positive' ? '#EBF9F4' : '#E8F4FF',
                    color: item.sentiment === 'positive' ? '#14B079' : '#0082FF',
                    textTransform: 'capitalize',
                  }}
                />
              </Box>
              <ArrowForwardIcon sx={{ color: 'text.secondary' }} />
            </Box>
          ))}
        </Box>
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          Key Events
        </Typography>

        <Box sx={{ 
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          pb: 2,
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
                <Typography variant="body2" color="text.secondary" paragraph>
                  {event.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {event.time}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default NewsInsights;
