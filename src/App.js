import { useContext } from "react";

// Material UI imports
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// App imports
import { context } from "./context/Provider";
import { themes } from './services/Theme';
import Home from './components/Home';

function App() {
  const [state] = useContext(context);
  const theme = createTheme(themes[state.theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
