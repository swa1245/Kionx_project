import React, { useState } from 'react';
import { Paper, Typography, Box, Grid, Divider, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const RangeSlider = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 4,
  width: '100%',
  backgroundColor: '#e9ecef',
  borderRadius: 2,
  margin: '8px 0',
  cursor: 'pointer',
}));

const Indicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: 12,
  height: 12,
  backgroundColor: 'black',
  borderRadius: '50%',
  top: -4,
  transform: 'translateX(-50%)',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateX(-50%) scale(1.2)',
  },
}));

function Performance() {
  const [hoveredPrice, setHoveredPrice] = useState(null);
  const [hoveredPosition, setHoveredPosition] = useState(null);

  const marketData = {
    marketCap: '$915,557,280,647',
    volume: '$13,248,350,782',
    dominance: '50.67%',
    currentPrice: 46953.04,
    todayLow: 45678.23,
    todayHigh: 47123.45,
    weekLow: 44234.12,
    weekHigh: 47234.56
  };

  const calculatePosition = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  const todayPosition = calculatePosition(
    marketData.currentPrice,
    marketData.todayLow,
    marketData.todayHigh
  );

  const weekPosition = calculatePosition(
    marketData.currentPrice,
    marketData.weekLow,
    marketData.weekHigh
  );

  const handleRangeHover = (event, min, max) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const position = (x / rect.width) * 100;
    const price = min + (position / 100) * (max - min);
    setHoveredPrice(price);
    setHoveredPosition(position);
  };

  const handleRangeLeave = () => {
    setHoveredPrice(null);
    setHoveredPosition(null);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Performance
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Today's Low
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Today's High
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Typography variant="body2" color="text.secondary">
            {formatPrice(marketData.todayLow)}
          </Typography>
          <Box sx={{ position: 'relative', flex: 1, mx: 2 }}>
            <RangeSlider
              onMouseMove={(e) => handleRangeHover(e, marketData.todayLow, marketData.todayHigh)}
              onMouseLeave={handleRangeLeave}
            >
              <Box
                sx={{
                  background: 'linear-gradient(90deg, #FF4949 0%, #FF4E11 15%, #FC870A 30%, #FFAF11 50%, #C2CB21 70%, #11EB68 100%)',
                  height: '100%',
                  borderRadius: 'inherit',
                }}
              />
              <Indicator sx={{ left: `${todayPosition}%` }}>
                <Tooltip 
                  open={true}
                  title={formatPrice(marketData.currentPrice)}
                  placement="top"
                  arrow
                >
                  <Box sx={{ width: '100%', height: '100%' }} />
                </Tooltip>
              </Indicator>
              {hoveredPrice && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: `${hoveredPosition}%`,
                    top: -30,
                    transform: 'translateX(-50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    py: 0.5,
                    px: 1,
                  }}
                >
                  <Typography variant="caption">
                    {formatPrice(hoveredPrice)}
                  </Typography>
                </Box>
              )}
            </RangeSlider>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {formatPrice(marketData.todayHigh)}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            52W Low
          </Typography>
          <Typography variant="body2" color="text.secondary">
            52W High
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Typography variant="body2" color="text.secondary">
            {formatPrice(marketData.weekLow)}
          </Typography>
          <Box sx={{ position: 'relative', flex: 1, mx: 2 }}>
            <RangeSlider
              onMouseMove={(e) => handleRangeHover(e, marketData.weekLow, marketData.weekHigh)}
              onMouseLeave={handleRangeLeave}
            >
              <Box
                sx={{
                  background: 'linear-gradient(90deg, #FF4949 0%, #FF4E11 15%, #FC870A 30%, #FFAF11 50%, #C2CB21 70%, #11EB68 100%)',
                  height: '100%',
                  borderRadius: 'inherit',
                }}
              />
              <Indicator sx={{ left: `${weekPosition}%` }}>
                <Tooltip 
                  open={true}
                  title={formatPrice(marketData.currentPrice)}
                  placement="top"
                  arrow
                >
                  <Box sx={{ width: '100%', height: '100%' }} />
                </Tooltip>
              </Indicator>
              {hoveredPrice && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: `${hoveredPosition}%`,
                    top: -30,
                    transform: 'translateX(-50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    py: 0.5,
                    px: 1,
                  }}
                >
                  <Typography variant="caption">
                    {formatPrice(hoveredPrice)}
                  </Typography>
                </Box>
              )}
            </RangeSlider>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {formatPrice(marketData.weekHigh)}
          </Typography>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Fundamentals
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, borderBottom: '1px solid #e0e0e0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Market Cap
              </Typography>
              <Tooltip title="The total market value of a cryptocurrency's circulating supply" arrow>
                <InfoOutlinedIcon sx={{ ml: 0.5, fontSize: 16, color: 'text.secondary', cursor: 'help' }} />
              </Tooltip>
            </Box>
            <Typography variant="body2">
              {marketData.marketCap}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, borderBottom: '1px solid #e0e0e0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                24h Trading Volume
              </Typography>
              <Tooltip title="A measure of how much of a cryptocurrency was traded in the last 24 hours" arrow>
                <InfoOutlinedIcon sx={{ ml: 0.5, fontSize: 16, color: 'text.secondary', cursor: 'help' }} />
              </Tooltip>
            </Box>
            <Typography variant="body2">
              {marketData.volume}
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, borderBottom: '1px solid #e0e0e0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Market Dominance
              </Typography>
              <Tooltip title="Bitcoin's share of the total cryptocurrency market capitalization" arrow>
                <InfoOutlinedIcon sx={{ ml: 0.5, fontSize: 16, color: 'text.secondary', cursor: 'help' }} />
              </Tooltip>
            </Box>
            <Typography variant="body2">
              {marketData.dominance}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, borderBottom: '1px solid #e0e0e0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Volume / Market Cap
              </Typography>
              <Tooltip title="Ratio between trading volume and market capitalization" arrow>
                <InfoOutlinedIcon sx={{ ml: 0.5, fontSize: 16, color: 'text.secondary', cursor: 'help' }} />
              </Tooltip>
            </Box>
            <Typography variant="body2">
              0.0247
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Performance;
