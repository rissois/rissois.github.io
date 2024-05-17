import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Grid,
} from "@mui/material";
import { CARDS } from "./projects/All";
import { Link } from "react-router-dom";

function Body() {
  return (
    <Grid container spacing={4}>
      {CARDS.map(({ uri, key, name, brief, link, Icon }) => (
        <Grid item key={key}>
          <Card sx={{ width: 240 }}>
            <CardActionArea
              component={Link}
              to={link ? "" : "/" + key}
              onClick={() =>
                link ? window.open(link, "_blank", "noreferrer") : {}
              }
            >
              <CardMedia
                component="img"
                image={"/thumbnails/" + uri}
                // sx={{ objectFit: 'contain', height: 240, }}
                sx={{
                  objectFit: "contain",
                  height: 240,
                  backgroundColor: "white",
                }}
              />
              <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                  {name}
                </Typography>
                <Typography>{brief}</Typography>
              </CardContent>
              {!!Icon && (
                <Icon
                  sx={{
                    position: "absolute",
                    top: 3,
                    right: 3,
                  }}
                />
              )}
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Body;
