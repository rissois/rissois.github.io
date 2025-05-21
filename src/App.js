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
            Scientist turned founder and product manager. I bring analytical
            rigor and systems thinking to building intuitive, user-centered
            products. Looking to join a team where I can drive impact through
            innovation, strategy, execution, and collaboration.
          </div>,
          <span>
            Email me{" "}
            <a
              href="mailto:steve.colvin@alum.mit.edu"
              style={{
                color: "#0b3b9c",
                textDecoration: "none",
                fontWeight: "bold",
              }}
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
              style={{
                color: "#0b3b9c",
                textDecoration: "none",
                fontWeight: "bold",
              }}
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
