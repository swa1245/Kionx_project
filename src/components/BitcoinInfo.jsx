import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
    scale: 0.8
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const imageVariants = {
  offscreen: {
    scale: 0,
    rotate: -180
  },
  onscreen: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      rotate: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2
      }
    }
  }
};

const buttonVariants = {
  rest: {
    scale: 1,
    backgroundColor: "#ffffff"
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#f8f9fa",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  },
  tap: {
    scale: 0.95,
    backgroundColor: "#e9ecef"
  }
};

const floatingIconVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

function BitcoinInfo() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <Box
              sx={{
                p: 4,
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #0052FF 0%, #2979FF 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0px 10px 30px rgba(0, 82, 255, 0.2)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }
              }}
            >
              <motion.div
                variants={floatingIconVariants}
                animate="animate"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 40 }} />
              </motion.div>

              <motion.div
                whileHover="hover"
                variants={imageVariants}
              >
                <Box
                  component="img"
                  src="https://img.icons8.com/fluency/256/profit-analysis.png"
                  alt="Calculate your profits"
                  sx={{ 
                    width: 128, 
                    height: 128, 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.3))',
                  }}
                />
              </motion.div>
              <Box sx={{ color: 'white', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <Typography 
                  variant="h5" 
                  component={motion.h5}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  gutterBottom
                  sx={{ 
                    fontWeight: 700,
                    textShadow: '0px 2px 4px rgba(0,0,0,0.2)'
                  }}
                >
                  Calculate your Profits
                </Typography>
                <Typography 
                  variant="body1"
                  component={motion.p}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  sx={{ 
                    mb: 3, 
                    opacity: 0.9,
                    textShadow: '0px 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  Track and analyze your cryptocurrency investments with our advanced profit calculator
                </Typography>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: 'white',
                      color: '#0052FF',
                      px: 4,
                      py: 1.5,
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontSize: '16px',
                      fontWeight: 600,
                      boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0px 6px 16px rgba(0,0,0,0.15)',
                      }
                    }}
                  >
                    Check Now
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <Box
              sx={{
                p: 4,
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #2979FF 0%, #00B4DB 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0px 10px 30px rgba(41, 121, 255, 0.2)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }
              }}
            >
              <motion.div
                variants={floatingIconVariants}
                animate="animate"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                <AccountBalanceIcon sx={{ fontSize: 40 }} />
              </motion.div>

              <motion.div
                whileHover="hover"
                variants={imageVariants}
              >
                <Box
                  component="img"
                  src="https://img.icons8.com/fluency/256/tax.png"
                  alt="Calculate your tax liability"
                  sx={{ 
                    width: 128, 
                    height: 128, 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.3))',
                  }}
                />
              </motion.div>
              <Box sx={{ color: 'white', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <Typography 
                  variant="h5" 
                  component={motion.h5}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  gutterBottom
                  sx={{ 
                    fontWeight: 700,
                    textShadow: '0px 2px 4px rgba(0,0,0,0.2)'
                  }}
                >
                  Calculate your Tax Liability
                </Typography>
                <Typography 
                  variant="body1"
                  component={motion.p}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  sx={{ 
                    mb: 3, 
                    opacity: 0.9,
                    textShadow: '0px 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  Stay compliant with tax regulations using our comprehensive cryptocurrency tax calculator
                </Typography>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: 'white',
                      color: '#2979FF',
                      px: 4,
                      py: 1.5,
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontSize: '16px',
                      fontWeight: 600,
                      boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0px 6px 16px rgba(0,0,0,0.15)',
                      }
                    }}
                  >
                    Check Now
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BitcoinInfo;
