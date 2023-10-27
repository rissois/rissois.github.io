import { Box, Typography } from '@mui/material';



function Hero({ name, description, children }) {
  if (typeof description === 'string') {
    description = [description]
  }
  return (
    <Box sx={{ marginTop: 8, marginBottom: 8 }}>
      <Typography variant='h3' sx={{ fontWeight: 100 }}>{name}</Typography>
      {description.map(line => <Typography variant='h6' sx={{ fontWeight: 100 }}>{line}</Typography>)}
      {children}
    </Box>
  );
}

export default Hero;
