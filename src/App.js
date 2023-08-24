import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div sx={{ height: '100%', backgroundColor: 'orange', width: '100%' }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: 'black' }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Steve Colvin's Portfolio</Typography>
            <Typography>test</Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1, backgroundColor: 'darkgrey' }}>
          <Container sx={{ backgroundColor: 'yellow', }}>
            <Typography>wtf</Typography>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default App;
