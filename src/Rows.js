import { Box, CardMedia, Card, Typography, Container, Paper, CardContent, Stack } from '@mui/material';
import Hero from './Hero';


function Rows({ name, description, photos, styles }) {

  return (
    <Container>
      <Hero {...{ name, description }} />
      <Stack spacing={5}>

        {photos.map(({ uri, title, text }) => (
          <Card sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardMedia
              component='img'
              image={uri}
              sx={{ objectFit: 'contain', height: 300, }}
            />
            <Box sx={{ height: 50, width: 50, backgroundColor: 'yellow' }} />
            <Box sx={{ flex: 1 }} />
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant='h6'>{title}</Typography>
              <Typography>{text}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default Rows;
