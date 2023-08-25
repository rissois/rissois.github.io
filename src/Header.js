import { AppBar, Box, IconButton, Link, ListItem, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import { ContactPage, GitHub, Home, LinkedIn } from '@mui/icons-material';
import { Link as BrowswerLink, useLocation } from 'react-router-dom';
import React from 'react';

const links = [
  { name: 'RESUME', uri: '/Steve Colvin Resume.pdf', Icon: ContactPage },
  { name: 'LINKEDIN', uri: 'https://www.linkedin.com/in/steve-colvin-664b0363/', Icon: LinkedIn },
  { name: 'GITHUB', uri: 'https://github.com/rissois', Icon: GitHub },
]

function Header() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const { pathname } = useLocation()

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ backgroundColor: '#0404040', }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }} >
          {pathname.length > 1 && <Box sx={{ flexGrow: 1 }}>
            <IconButton component={BrowswerLink} to={'/'}><Home /></IconButton>
          </Box>}
          {links.map(({ name, uri, Icon, }) => (
            <Link key={name} href={uri} color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
              <ListItem dense={isMobile}>
                {!isMobile && <ListItemIcon sx={{ minWidth: 0, paddingRight: 1, }}>
                  <Icon />
                </ListItemIcon>}
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
