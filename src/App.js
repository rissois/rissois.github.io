import {
  Box,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Body from "./Body";
import Rows from "./Rows";
import Gallery from "./Gallery";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { DETAILS } from "./projects/All";
import Error from "./Error";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/torte/*",
        element: <Rows {...DETAILS.torte} />,
      },
      {
        path: "/academic/*",
        element: <Gallery {...DETAILS.academic} />,
      },
      {
        path: "/vexillography/*",
        element: <Rows {...DETAILS.vexillography} />,
      },
      {
        path: "/photography/*",
        element: <Gallery {...DETAILS.photography} />,
      },
    ],
  },
]);

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, paddingBottom: 12 }}>
        <Header />
        <Outlet />
      </Box>

      <Container sx={{ paddingBottom: 2 }}>
        <Typography>
          Copyright Steve Colvin 2024. All rights reserved.
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <Container>
      <Hero
        name="Steve Colvin"
        description={[
          <div>
            Entrepreneurial product manager and MIT PhD. Experienced leader who
            launches innovative solutions on tight budgets and applies
            proficiency across domains to break down complex problems and
            communicate with cross-functional teams.
          </div>,
          <span>
            Email me{" "}
            <a
              href="mailto:steve.colvin@alum.mit.edu"
              style={{ color: "#90CAF9" }}
            >
              steve.colvin@alum.mit.edu
            </a>
          </span>,
          <div>
            If you'd like to see my coding portfolio, please visit my{" "}
            <Link
              href="https://github.com/rissois/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github page
            </Link>
            .
          </div>,
        ]}
      />
      <Body />
    </Container>
  );
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
