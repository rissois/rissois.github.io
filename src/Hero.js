import { Box, Typography } from '@mui/material';



function Hero({ name, description, children }) {
  return (
    <Box sx={{ marginTop: 8, marginBottom: 8 }}>
      <Typography variant='h3' sx={{ fontWeight: 100 }}>{name}</Typography>
      <Typography variant='h6' sx={{ fontWeight: 100 }}>{description}</Typography>
      {children}
    </Box>
  );
}

export default Hero;
