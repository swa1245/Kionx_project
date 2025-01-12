import React from 'react';
import { Paper, Typography, Button, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #0052FF 0%, #2979FF 100%)',
  color: 'white',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  borderRadius: '24px',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0px 8px 24px rgba(0, 82, 255, 0.15)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
  },
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '32px',
});

function GetStartedBanner() {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <StyledPaper elevation={0}>
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ImageContainer>
            <Box
              component="img"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPgogICAgPCEtLSBHZWFyIGljb25zIC0tPgogICAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiIGZpbGw9IiM3M0IyRkYiLz4KICAgIDxjaXJjbGUgY3g9IjE3MCIgY3k9IjMwIiByPSIxMCIgZmlsbD0iIzczQjJGRiIvPgogICAgCiAgICA8IS0tIFRhYmxldC9QaG9uZSAtLT4KICAgIDxyZWN0IHg9IjYwIiB5PSI0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjEyMCIgcng9IjEwIiBmaWxsPSIjRkZGIi8+CiAgICAKICAgIDwhLS0gTGlnaHRuaW5nIGJvbHQgLS0+CiAgICA8cGF0aCBkPSJNOTAgNzBMODUgMTAwSDExMEw5NSAxMzAiIHN0cm9rZT0iIzAwNTJGRiIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+CiAgICAKICAgIDwhLS0gUGVvcGxlIC0tPgogICAgPGNpcmNsZSBjeD0iNTAiIGN5PSIxNTAiIHI9IjIwIiBmaWxsPSIjRkZDMjQ5Ii8+CiAgICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjIwIiBmaWxsPSIjRkZDMjQ5Ii8+CiAgPC9nPgo8L3N2Zz4="
              alt="Get Started Illustration"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 8px 16px rgba(255,255,255,0.2))',
                transform: 'scale(1.1)',
              }}
            />
          </ImageContainer>

          <Typography 
            variant="h4" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '28px', md: '32px' },
              mb: 2,
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Get Started with KoinX
          </Typography>
          
          <Typography 
            variant="body1"
            sx={{ 
              mb: 4,
              opacity: 0.9,
              fontSize: '16px',
              lineHeight: 1.6,
              letterSpacing: '0.02em',
              maxWidth: '500px',
              margin: '0 auto',
              textShadow: '0px 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            With our range of features that you can equip for free,
            KoinX allows you to be more educated and aware of your tax reports.
          </Typography>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'white',
                color: '#0052FF',
                px: 4,
                py: 1.75,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.02em',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.95)',
                  boxShadow: '0px 12px 20px rgba(0,0,0,0.15)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Started for FREE
            </Button>
          </motion.div>

          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '15%',
              right: '10%',
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)',
            }}
          />
        </motion.div>
      </StyledPaper>
    </motion.div>
  );
}

export default GetStartedBanner;
