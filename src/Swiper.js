import { Box, Card, CardMedia, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';



function Swiper({ photos }) {
  const [position, setPosition] = useState(0)
  const photo = photos[position]

  return (
    <Grid2 sx={{ marginTop: 4, backgroundColor: '#1c1c1c', color: 'white', display: 'flex', direction: 'row' }}>
      <Card sx={{ backgroundColor: 'transparent', maxWidth: 300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CardMedia
          component='img'
          image={photo.uri}
          sx={{ objectFit: 'contain', height: 200, }}
        />
      </Card>
      <Box sx={{ marginLeft: 4, marginRight: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant='h6' sx={{ fontWeight: 700 }}>{photo.title}</Typography>
        <Typography>{photo.text}</Typography>
      </Box>
    </Grid2>
  );
}

export default Swiper;
