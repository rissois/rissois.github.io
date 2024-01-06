import { Card, CardContent, CardMedia, Typography, Grid, Container, } from '@mui/material';
import Hero from './Hero';



function Gallery({ name, description, photos, styles }) {
  const { groupHeight, groupPadding = 0 } = styles

  return (
    <Container>
      <Hero {...{ name, description }} />
      <Grid container spacing={4}>
        {photos.map(({ uri, title, imageHeight, }) => (
          <Grid item key={uri}>
            <Card sx={{ maxWidth: 800 }}>
              <CardMedia
                component='img'
                image={uri}
                sx={{ padding: groupPadding, objectFit: 'cover', height: imageHeight || groupHeight, backgroundColor: 'white', }}
              />
              <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 700 }}>{title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Gallery;