import React from 'react';
import { Paper, Typography, Box, Avatar, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  borderRadius: '24px',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #0052FF, #2979FF)',
  },
}));

const CoinCard = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  borderRadius: '16px',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(0, 82, 255, 0.04)',
    transform: 'translateX(8px)',
  },
  '&:last-child': {
    marginBottom: 0,
  },
}));

const trendingCoins = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
    priceChange: 2.51,
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    priceChange: -1.23,
  },
  {
    id: 3,
    name: 'Solana',
    symbol: 'SOL',
    image: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
    priceChange: 5.32,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

function TrendingCoins() {
  return (
    <StyledPaper elevation={0}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 3 
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '-0.02em',
          }}
        >
          Trending Coins
        </Typography>
        <Chip 
          label="24h" 
          size="small"
          sx={{ 
            bgcolor: 'rgba(0, 82, 255, 0.08)',
            color: 'primary.main',
            fontWeight: 600,
            borderRadius: '8px',
          }}
        />
      </Box>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        {trendingCoins.map((coin) => (
          <CoinCard
            key={coin.id}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                src={coin.image}
                alt={coin.name}
                sx={{ 
                  width: 32, 
                  height: 32,
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Box>
                <Typography 
                  variant="subtitle1"
                  sx={{ 
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  {coin.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  {coin.symbol}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: coin.priceChange >= 0 ? '#EBF9F4' : '#FFE9EC',
                  color: coin.priceChange >= 0 ? '#14B079' : '#F7324C',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '8px',
                  boxShadow: `0px 4px 8px ${
                    coin.priceChange >= 0 
                      ? 'rgba(20, 176, 121, 0.1)' 
                      : 'rgba(247, 50, 76, 0.1)'
                  }`,
                }}
              >
                {coin.priceChange >= 0 ? (
                  <ArrowUpwardIcon sx={{ fontSize: 16, mr: 0.5 }} />
                ) : (
                  <ArrowDownwardIcon sx={{ fontSize: 16, mr: 0.5 }} />
                )}
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  {Math.abs(coin.priceChange)}%
                </Typography>
              </Box>

              <IconButton
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'rgba(0, 82, 255, 0.08)',
                  },
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
          </CoinCard>
        ))}
      </motion.div>
    </StyledPaper>
  );
}

export default TrendingCoins;
