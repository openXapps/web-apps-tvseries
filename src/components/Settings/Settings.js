import { useState, useContext } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { context } from '../../context/Provider';
import { themeList } from '../../services/Theme';

const initFieldData = {
  theme: '',
};

const Settings = ({ history }) => {
  const [state, dispatch] = useContext(context);
  const [fields, setFields] = useState(initFieldData);
  const [isSaved, setIsSaved] = useState(true);

  const handleFieldChange = ({ target: { name, value } }) => {
    setFields({ ...fields, [name]: value });
    if (isSaved) setIsSaved(false);
  };

  const handleSaveButton = () => {
    if (fields.theme !== state.theme) dispatch({ type: 'THEME', payload: fields.theme });
    setIsSaved(true);
  };

  return (
    <Container maxWidth="sm">
      <Typography sx={{ marginY: 2 }} color="primary" variant="h6">Settings</Typography>
      <Paper elevation={0}>
        <Box p={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="tvs-settings-theme-label">Theme</InputLabel>
            <Select
              labelId="tvs-settings-theme-label"
              // id="tvs-settings-theme-picker"
              name="theme"
              value={fields.theme}
              onChange={handleFieldChange}
              label="Theme"
            >
              {themeList.map((v, i) => {
                return (
                  <MenuItem key={i} value={v.themeId}>{v.themeAlias}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Box p={3}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" fullWidth onClick={handleSaveButton} disabled={isSaved}>Save</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
                <Button variant="outlined" fullWidth onClick={() => history.goBack()} disabled={state.showProgress}>Back</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Settings;