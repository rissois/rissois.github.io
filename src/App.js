import { Box, Container, CssBaseline, Link, ThemeProvider, Typography, createTheme, } from '@mui/material';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Body from './Body';
import Rows from './Rows';
import Gallery from './Gallery';
import {
  createBrowserRouter,
  Outlet,
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
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/torte/*',
        element: <Rows {...DETAILS.torte} />
      },
      {
        path: '/academic/*',
        element: <Gallery {...DETAILS.academic} />
      },
      {
        path: '/vexillography/*',
        element: <Rows {...DETAILS.vexillography} />
      },
      {
        path: '/photography/*',
        element: <Gallery {...DETAILS.photography} />
      },
    ]
  }
])

function Layout() {
  return (
    <ThemeProvider theme={theme} >
      <Box sx={{ flexGrow: 1, paddingBottom: 12 }}>
        <Header />
        <Outlet />
      </Box>

      <Container sx={{ paddingBottom: 2 }}>
        <Typography>Copyright Steve Colvin 2023. All rights reserved.</Typography>
      </Container>
    </ThemeProvider>
  )
}

function Home() {
  return (
    <Container>
      <Hero name='Steve Colvin' description={[<div>Design portfolio (for programming, visit my <Link href="https://github.com/rissois/" target="_blank" rel="noopener noreferrer">Github page</Link>)</div>]} />
      <Body />
    </Container>
  )
}

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
