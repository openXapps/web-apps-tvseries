import { withRouter } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = ({ history, location }) => {

  const handleHomeButton = () => {
    location.pathname !== '/' ? history.replace('/') : window.location.assign('https://www.openapps.co.za');
  };

  return (
    <Box display="flex">
      <AppBar position="fixed">
        <Container maxWidth="md" disableGutters>
          <Toolbar disableGutters>
            <IconButton
              aria-label="home"
              sx={{ mr: 1 }}
              onClick={handleHomeButton}
            >{location.pathname === '/' ? <HomeIcon /> : <ArrowBackIcon />}</IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}
            >TV Series</Typography>
            <IconButton
              disabled={location.pathname !== '/'}
              onClick={() => history.push('/settings')}
            ><SettingsIcon /></IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default withRouter(Header);