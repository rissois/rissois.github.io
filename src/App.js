import { Box, Container, CssBaseline, ThemeProvider, Typography, createTheme, } from '@mui/material';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Body from './Body';
import { useCallback, useState } from 'react';
import Rows from './Rows';
import Gallery from './Gallery';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  const [project, setProject] = useState(null)
  const back = useCallback(() => setProject(null), [])

  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme} >
        <Box sx={{ flexGrow: 1, paddingBottom: 12 }}>
          <Header back={project && back} />
          {!project
            ? <Container>
              <Hero name='Steve Colvin' description='Programming and design portfolio' />
              <Body {...{ setProject }} />
            </Container>
            : project.component === 'rows'
              ? <Rows {...project} />
              : <Gallery {...project} />
          }
        </Box>

        <Container sx={{ paddingBottom: 2 }}>
          <Typography>Copyright Steve Colvin 2023. All rights reserved.</Typography>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
