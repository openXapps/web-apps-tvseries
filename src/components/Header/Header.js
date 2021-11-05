import { withRouter } from 'react-router-dom';

// import useTheme from '@mui/material/styles/useTheme';
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';

import { getLocalStorage } from '../../services/Storage';

const Header = ({ history, location }) => {
  // const theme = useTheme();

  const handleHomeButton = () => {
    location.pathname !== '/' ? history.replace('/') : window.location.assign('https://www.openapps.co.za');
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="md" disableGutters>
        <Toolbar disableGutters>
          <IconButton
            aria-label="home"
            sx={{ mr: 1 }}
            color="inherit"
            onClick={handleHomeButton}
          >{location.pathname === '/' ? <HomeIcon /> : <ArrowBackIcon />}</IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
          >TV Series <span><Hidden xsDown><Typography variant="caption">v{getLocalStorage('settings').data.appVersion}</Typography></Hidden></span></Typography>
          <IconButton
            color="inherit"
            disabled={location.pathname !== '/'}
            onClick={() => history.push('/settings')}
          ><SettingsIcon /></IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withRouter(Header);