import { AppBar, Box, IconButton, Link, ListItem, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import { ArrowBack, ContactPage, GitHub, LinkedIn } from '@mui/icons-material';
import React from 'react';

const links = [
  { name: 'RESUME', uri: '/Steve Colvin Resume.pdf', Icon: ContactPage },
  { name: 'LINKEDIN', uri: 'https://www.linkedin.com/in/steve-colvin-664b0363/', Icon: LinkedIn },
  { name: 'GITHUB', uri: 'https://github.com/rissois', Icon: GitHub },
]

function Header({ back }) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ backgroundColor: '#0404040', }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }} >
          {!!back && <Box sx={{ flexGrow: 1 }}>
            <IconButton onClick={back} size={isMobile ? 'medium' : 'large'} edge="start"><ArrowBack /></IconButton>
          </Box>}
          {links.map(({ name, uri, Icon, }) => (
            <Link key={name} href={uri} color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
              <ListItem dense={isMobile}>
                <ListItemIcon sx={{ minWidth: 0, paddingRight: 1, }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText>
                  {name}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Header;
