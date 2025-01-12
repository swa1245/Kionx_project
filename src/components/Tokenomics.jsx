import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Tokenomics = () => {
  const distributionData = [
    { name: 'Crowdsale investors', value: 80, color: '#0082FF' },
    { name: 'Foundation', value: 20, color: '#FAA002' },
  ];

  const CustomLegend = ({ payload }) => {
    return (
      <Box sx={{ mt: 3 }}>
        {payload.map((entry, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: entry.color,
                mr: 1,
              }}
            />
            <Typography variant="body2">
              {entry.value} - {distributionData[index].value}%
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Tokenomics
      </Typography>

      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
        Initial Distribution
      </Typography>

      <Box sx={{ height: 300, width: '100%' }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={distributionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {distributionData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Typography variant="body2" paragraph sx={{ color: 'text.secondary', mt: 3, lineHeight: 1.7 }}>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </Typography>
    </Paper>
  );
};

export default Tokenomics;
