import { Card, CardContent, CardMedia, CardActionArea, Typography, Grid, } from '@mui/material';
import { CARDS, DETAILS } from './projects/All';



function Body({ setProject }) {
  return (
    <Grid container spacing={4}>
      {CARDS.map(({ uri, key, name, brief, link, Icon }) => (
        <Grid item key={key}>
          <Card sx={{ width: 240 }}>
            <CardActionArea onClick={() => link ? window.open(link, "_blank", "noreferrer") : setProject(DETAILS[key])}>
              <CardMedia
                component='img'
                image={'/thumbnails/' + uri}
                // sx={{ objectFit: 'contain', height: 240, }}
                sx={{ objectFit: 'cover', height: 240, backgroundColor: 'white' }}
              />
              <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 700 }}>{name}</Typography>
                <Typography>{brief}</Typography>
              </CardContent>
              {!!Icon && <Icon sx={{ position: 'absolute', top: 4, right: 4 }} />}
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Body;
