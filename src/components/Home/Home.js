import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

const Home = () => {

  return (
    <Container maxWidth="md">
      <Typography sx={{ marginY: 2 }} color="primary">Home</Typography>
      <Grid container>
        <Grid item xs={12} md={2}>
          <div>NAV</div>
        </Grid>
        <Grid item xs={12} md={10}>
          <div>SERIES</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;