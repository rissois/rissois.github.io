import { Box, CardMedia, Card, Typography } from '@mui/material';
import { useState } from 'react';
import Swiper from './Swiper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { DETAILS } from './projects/All';



function Project({ project }) {
  const { name, description, link, photos, Component } = DETAILS[project]

  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant='h5' sx={{ fontWeight: 700 }}>{name}</Typography>
      {description.map(p => <Typography sx={{ fontWeight: 100 }}>{p}</Typography>)}
      <Typography>Optional external link</Typography>
      <Grid2 sx={{ marginTop: 2, backgroundColor: '#1c1c1c', }}>
        {photos.map(photo => (
          <Card>
            <CardMedia
              component='img'
              image={photo.uri}
              sx={{ objectFit: 'contain', height: 200, }}
            />
          </Card>
        ))}
      </Grid2>
    </Box>
  );
}

export default Project;
