// import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Settings = () => {
  // const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Typography sx={{ marginY: 2 }} color="primary" variant="h6">Settings</Typography>
    </Container>
  );
};

export default Settings;