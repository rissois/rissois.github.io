import { Box, Typography } from '@mui/material';



function Hero({ name, description }) {
  return (
    <Box sx={{ marginTop: 8, marginBottom: 8 }}>
      <Typography variant='h3' sx={{ fontWeight: 100 }}>{name ? name + ' by Steve Colvin' : 'Steve Colvin'}</Typography>
      <Typography variant='h6' sx={{ fontWeight: 100 }}>{description || 'Programming and design portfolio'}</Typography>
    </Box>
  );
}

export default Hero;
