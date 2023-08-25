import { Box, Typography } from '@mui/material';



function Hero({ name, description }) {
  return (
    <Box sx={{ marginTop: 8, marginBottom: 8 }}>
      <Typography variant='h3' sx={{ fontWeight: 100 }}>{name}</Typography>
      <Typography variant='h6' sx={{ fontWeight: 100 }}>{description}</Typography>
    </Box>
  );
}

export default Hero;
