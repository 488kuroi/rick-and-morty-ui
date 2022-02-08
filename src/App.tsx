
import './App.scss';
import { useSelector } from 'react-redux';
import { routes, Router as CustomRouter } from '@routes';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { light, dark } from '@themes';

import { selectLoaders, selectDarkMode } from '@store/selectors';

import LinearProgress from '@material-ui/core/LinearProgress';

import { useStyles } from '@pages';

import { ModalComponent, DrawerComponent, FooterComponent } from '@components'


function App() {
  const classes = useStyles();
  const LOADERS = useSelector(selectLoaders)
  const DARK_MODE = useSelector(selectDarkMode)

  return (
    <ThemeProvider theme={(DARK_MODE.isDark === true ? dark : light)}>

      {
        LOADERS.showLine &&
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2000
        }}>
          <LinearProgress />
        </div>
      }

      <Router >

        <div className={`App App_${DARK_MODE.isDark ? 'dark' : 'light'} ${classes.AppContainer}`}>

          <DrawerComponent />

          <CustomRouter routes={routes} />

          <FooterComponent />


        </div>
      </Router>
      <ModalComponent />
    </ThemeProvider>
  );
}


export default App;