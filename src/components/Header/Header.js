// import { useState, useEffect } from 'react';
// import name from 'react-router-dom';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {

  return (
    <Box display="flex">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            // edge="start"
            aria-label="home"
            sx={{ mr: 1 }}
          ><HomeIcon /></IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} color="primary"
          >TV Series</Typography>
          <IconButton><SettingsIcon /></IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;