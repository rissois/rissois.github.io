import { Box, Container, CssBaseline, ThemeProvider, createTheme, } from '@mui/material';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Body from './Body';
import { useCallback, useMemo, useState } from 'react';
import Project from './Project';
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

  // const Project = useMemo(() => {
  //   switch (project?.component) {
  //     case 'rows':
  //     default:
  //       return Rows
  //   }
  // }, [project])

  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme} >
        <Box sx={{ flexGrow: 1, backgroundColor: '#282c34', paddingBottom: 12 }}>
          <Header back={project && back} />
          {!project
            ? <Container>
              <Hero />
              <Body {...{ setProject }} />
            </Container>
            : project.component === 'rows'
              ? <Rows {...project} />
              : <Gallery {...project} />
          }
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
