import { Container, Typography, Box } from '@mui/material';
import { Link, useRouteError } from 'react-router-dom';
import Hero from './Hero';



function Error() {
  const error = useRouteError()

  return (
    <Container>
      <Hero name='Error' description={error.statusText || error.message}>
        <Box sx={{ paddingTop: 4, paddingBottom: 4 }}>
          <Typography component={Link} to={'/'} sx={{ color: 'lightgrey', textDecoration: 'none', }}>Click here to go home</Typography>
        </Box>
      </Hero>
    </Container>
  )
}

export default Error;
