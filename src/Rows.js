import { CardMedia, Card, Typography, Container, CardContent, Stack, Box, Divider, useMediaQuery } from '@mui/material';
import Hero from './Hero';


function Rows({ name, description, photos, styles }) {
  const { groupHeight = 300 } = styles
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <Container>
      <Hero {...{ name, description }} />
      <Stack spacing={5} divider={<Divider flexItem />}>
        {photos.map(({ uri, title, text, width, height }) => (
          <Card sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
            <CardMedia
              {...(uri.includes('mp4')
                ? { component: 'video', autoPlay: true, loop: true, playsInline: true, controls: false }
                : { component: 'img' })}
              image={uri}
              sx={{ objectFit: 'cover', height: groupHeight, width: width * groupHeight / height, backgroundColor: 'white', }}
            />
            <CardContent sx={{ flex: 1, }}>
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
