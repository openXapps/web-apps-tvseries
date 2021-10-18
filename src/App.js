import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Material UI imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

// App imports
import { context } from "./context/Provider";
import { themes } from './services/Theme';

// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Error404 from './components/Error/Error404';

function App() {
  const [state] = useContext(context);
  const theme = createTheme(themes[state.theme]);
  // const baseRoute = '/apps/tvseries';
  const baseRoute = '/';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1 */}
      <BrowserRouter basename={baseRoute}>
        <Header />
        <Toolbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
