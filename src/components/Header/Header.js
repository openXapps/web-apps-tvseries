import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <Box display="flex">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            // edge="start"
            aria-label="home"
            sx={{ mr: 1 }}
          ><HomeIcon /></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="primary"
          >TV Series</Typography>
          <IconButton
            aria-label="menu"
          ><MenuIcon /></IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;