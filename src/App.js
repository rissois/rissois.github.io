import { Box, Container, CssBaseline, ThemeProvider, Typography, createTheme, } from '@mui/material';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Body from './Body';
import { useCallback, useState } from 'react';
import Rows from './Rows';
import Gallery from './Gallery';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { DETAILS } from './projects/All';
import Error from './Error';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const router = createBrowserRouter([
  {
    path: '/torte',
    element: <Rows {...DETAILS.torte} />
  },
  {
    path: '/academic',
    element: <Gallery {...DETAILS.academic} />
  },
  {
    path: '/vexillography',
    element: <Rows {...DETAILS.vexillography} />
  },
  {
    path: '/photography',
    element: <Gallery {...DETAILS.photography} />
  },
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  }
])

function Home() {
  return <Container>
    <Hero name='Steve Colvin' description='Programming and design portfolio' />
    <Body />
  </Container>
}

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme} >
        <Box sx={{ flexGrow: 1, paddingBottom: 12 }}>
          <Header />
          <RouterProvider router={router} />
        </Box>

        <Container sx={{ paddingBottom: 2 }}>
          <Typography>Copyright Steve Colvin 2023. All rights reserved.</Typography>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
