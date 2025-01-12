import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const TeamMemberCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#E8F4FD',
  borderRadius: '12px',
  marginBottom: theme.spacing(3),
  '&:last-child': {
    marginBottom: 0,
  },
}));

const ProfileImage = styled('img')({
  width: '120px',
  height: '120px',
  borderRadius: '12px',
  objectFit: 'cover',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
});

function Team() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      description: 'John Smith is a pioneer in blockchain technology with over 10 years of experience. Previously, he led blockchain initiatives at major financial institutions and contributed to several groundbreaking projects in the cryptocurrency space.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      description: 'Sarah brings 8+ years of experience in blockchain architecture and distributed systems. She has led the development of several successful blockchain platforms and is a frequent speaker at technology conferences.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Research',
      description: 'Michael has a Ph.D. in Cryptography and has published numerous papers on blockchain technology. He leads our research initiatives and helps shape the future direction of our platform.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3,
        backgroundColor: 'white',
        borderRadius: '16px'
      }}
    >
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
          fontWeight: 600,
          color: '#0F1629',
          mb: 3
        }}
      >
        Team
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4,
          color: '#3E424A',
          lineHeight: 1.6
        }}
      >
        Meet the experienced team behind KoinX's innovative cryptocurrency solutions.
      </Typography>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        {teamMembers.map((member, index) => (
          <motion.div key={index} variants={item}>
            <TeamMemberCard>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={3}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <ProfileImage
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                    />
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mt: 2,
                        fontWeight: 600,
                        color: '#0F1629'
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="subtitle2"
                      sx={{ 
                        color: '#788194',
                        fontWeight: 500
                      }}
                    >
                      {member.role}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: '#3E424A',
                      lineHeight: 1.8,
                      [theme => theme.breakpoints.down('md')]: {
                        mt: 2
                      }
                    }}
                  >
                    {member.description}
                  </Typography>
                </Grid>
              </Grid>
            </TeamMemberCard>
          </motion.div>
        ))}
      </motion.div>
    </Paper>
  );
}

export default Team;
