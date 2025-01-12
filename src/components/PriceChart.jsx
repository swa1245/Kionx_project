import React, { useState, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Box, Typography, ButtonGroup, Button, Skeleton, useTheme, useMediaQuery } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const PriceChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedRange, setSelectedRange] = useState('24h');
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredPrice, setHoveredPrice] = useState(null);

  const timeRanges = [
    { label: '24h', value: '24h' },
    { label: '7D', value: '7d' },
    { label: '1M', value: '30d' },
    { label: '3M', value: '90d' },
    { label: '1Y', value: '365d' },
    { label: 'All', value: 'max' }
  ];

  // Sample data - replace with actual API data
  const generateData = (range) => {
    const now = new Date();
    const data = [];
    const points = 24;
    const basePrice = 46000;
    const volatility = 0.02;

    for (let i = 0; i < points; i++) {
      const time = new Date(now - ((points - i) * (3600000)));
      const randomChange = (Math.random() - 0.5) * volatility;
      const price = basePrice * (1 + randomChange);
      data.push({
        time: time.toLocaleTimeString(),
        price: price,
        date: time.toLocaleDateString(),
      });
    }
    return data;
  };

  const [data, setData] = useState(generateData('24h'));

  const handleRangeChange = (range) => {
    setSelectedRange(range);
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setData(generateData(range));
      setIsLoading(false);
    }, 500);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const price = payload[0].value;
      setHoveredPrice(price);
      return (
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 2,
            borderRadius: 1,
            boxShadow: theme.shadows[2],
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {payload[0].payload.date}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500, color: 'primary.main' }}>
            {formatPrice(price)}
          </Typography>
        </Box>
      );
    }
    setHoveredPrice(null);
    return null;
  };

  const priceChange = data[data.length - 1]?.price - data[0]?.price;
  const priceChangePercent = (priceChange / data[0]?.price) * 100;
  const isPriceUp = priceChange >= 0;

  return (
    <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: 2,
        mb: 3 
      }}>
        <Box>
          <Typography variant="h6" gutterBottom={isMobile}>
            Bitcoin Price Chart
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              {hoveredPrice ? formatPrice(hoveredPrice) : formatPrice(data[data.length - 1]?.price)}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: isPriceUp ? '#EBF9F4' : '#FFE9EC',
                color: isPriceUp ? '#14B079' : '#F7324C',
                px: 1,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              {isPriceUp ? (
                <ArrowUpwardIcon sx={{ fontSize: 16, mr: 0.5 }} />
              ) : (
                <ArrowDownwardIcon sx={{ fontSize: 16, mr: 0.5 }} />
              )}
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {Math.abs(priceChangePercent).toFixed(2)}%
              </Typography>
            </Box>
          </Box>
        </Box>
        <ButtonGroup 
          variant="outlined" 
          size="small"
          sx={{
            '& .MuiButton-root': {
              borderColor: 'divider',
              color: 'text.secondary',
              '&.active': {
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              },
            },
          }}
        >
          {timeRanges.map((range) => (
            <Button
              key={range.value}
              onClick={() => handleRangeChange(range.value)}
              className={selectedRange === range.value ? 'active' : ''}
            >
              {range.label}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      <Box sx={{ height: 400, width: '100%' }}>
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" height={400} />
        ) : (
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0052FF" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#0052FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="time" 
                stroke="#999999"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="#999999"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                domain={['dataMin - 1000', 'dataMax + 1000']}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine
                y={data[0]?.price}
                stroke="#999999"
                strokeDasharray="3 3"
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#0052FF"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: '#0052FF' }}
                fill="url(#colorPrice)"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Box>
    </Box>
  );
};

export default PriceChart;
