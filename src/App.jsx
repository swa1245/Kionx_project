import React from 'react';
import { Box, Container, Typography, Grid, Paper, Breadcrumbs, Link, Tabs, Tab, Divider, useMediaQuery, useTheme } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Header from './components/Header';
import TradingViewWidget from './components/TradingViewWidget';
import TrendingCoins from './components/TrendingCoins';
import BitcoinInfo from './components/BitcoinInfo';
import Performance from './components/Performance';
import Sentiment from './components/Sentiment';
import Team from './components/Team';
import GetStartedBanner from './components/GetStartedBanner';
import Fundamentals from './components/Fundamentals';
import NewsInsights from './components/NewsInsights';
import Technicals from './components/Technicals';
import Tokenomics from './components/Tokenomics';

function App() {
  const [tabValue, setTabValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderTabContent = () => {
    switch (tabValue) {
      case 0:
        return (
          <>
            <Performance />
            <Sentiment />
            <BitcoinInfo />
            <Team />
          </>
        );
      case 1:
        return <Fundamentals />;
      case 2:
        return <NewsInsights />;
      case 3:
        return <Sentiment />;
      case 4:
        return <Team />;
      case 5:
        return <Technicals />;
      case 6:
        return <Tokenomics />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#EFF2F5' }}>
      <Header />
      
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Breadcrumbs 
          separator="›" 
          sx={{ 
            mb: 3,
            '& .MuiBreadcrumbs-separator': {
              mx: 1,
              color: 'text.secondary',
            },
            '& .MuiBreadcrumbs-li': {
              fontSize: '14px',
            }
          }}
        >
          <Link href="#" color="text.secondary" sx={{ 
            textDecoration: 'none',
            '&:hover': { color: 'primary.main' }
          }}>
            Cryptocurrencies
          </Link>
          <Typography color="text.primary" sx={{ fontWeight: 500 }}>
            Bitcoin
          </Typography>
        </Breadcrumbs>

        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center', 
                gap: isMobile ? 2 : 0,
                mb: 2 
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  flex: 1,
                  gap: 2
                }}>
                  <Box component="img" 
                    src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                    alt="Bitcoin"
                    sx={{ 
                      width: 40, 
                      height: 40,
                      filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))'
                    }}
                  />
                  <Box>
                    <Typography variant="h4" component="h1" sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '24px', md: '32px' },
                      letterSpacing: '-0.02em',
                      mb: 0.5
                    }}>
                      Bitcoin 
                    </Typography>
                    <Typography variant="subtitle1" sx={{ 
                      color: 'text.secondary',
                      fontWeight: 500,
                      letterSpacing: '0.02em'
                    }}>
                      BTC
                    </Typography>
                  </Box>
                  <Box 
                    sx={{ 
                      backgroundColor: '#808A9D',
                      color: 'white',
                      px: 2,
                      py: 0.75,
                      borderRadius: 2,
                      fontSize: '14px',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                    }}
                  >
                    Rank #1
                  </Box>
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 2
                }}>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '24px', md: '32px' },
                    letterSpacing: '-0.02em'
                  }}>
                    $46,953.04
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      bgcolor: '#EBF9F4',
                      color: '#14B079',
                      px: 2,
                      py: 0.75,
                      borderRadius: 2,
                      boxShadow: '0px 2px 4px rgba(20,176,121,0.1)'
                    }}
                  >
                    <ArrowUpwardIcon sx={{ fontSize: 18, mr: 0.5 }} />
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600,
                      letterSpacing: '0.02em'
                    }}>
                      2.51%
                    </Typography>
                  </Box>
                  <Typography variant="subtitle2" sx={{ 
                    color: 'text.secondary',
                    fontWeight: 500,
                    letterSpacing: '0.02em'
                  }}>
                    (24H)
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ 
                my: 3,
                borderColor: 'rgba(0,0,0,0.08)'
              }} />

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  letterSpacing: '-0.01em'
                }}>
                  Bitcoin Price Chart (USD)
                </Typography>
                <TradingViewWidget />
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ 
                borderBottom: 1, 
                borderColor: 'divider',
                mb: 3,
              }}>
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange}
                  variant={isMobile ? "scrollable" : "standard"}
                  scrollButtons={isMobile ? "auto" : false}
                  sx={{
                    '& .MuiTab-root': {
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: '16px',
                      letterSpacing: '0.02em',
                      minWidth: isMobile ? 'auto' : 120,
                      color: 'text.secondary',
                      '&.Mui-selected': {
                        color: 'primary.main',
                        fontWeight: 600,
                      },
                    },
                    '& .MuiTabs-indicator': {
                      height: 3,
                      borderRadius: '3px 3px 0 0',
                    },
                  }}
                >
                  <Tab label="Overview" />
                  <Tab label="Fundamentals" />
                  <Tab label="News Insights" />
                  <Tab label="Sentiments" />
                  <Tab label="Team" />
                  <Tab label="Technicals" />
                  <Tab label="Tokenomics" />
                </Tabs>
              </Box>

              {renderTabContent()}
            </Box>
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <Box sx={{ 
              position: { xs: 'static', lg: 'sticky' },
              top: 24,
            }}>
              <GetStartedBanner />
              <TrendingCoins />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
