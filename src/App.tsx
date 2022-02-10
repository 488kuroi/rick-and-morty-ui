
import './App.scss';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { routes, Router as CustomRouter } from '@routes';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { light, dark } from '@themes';

import { selectLoaders, selectDarkMode, selectLanguage } from '@store/selectors';
import { setLanguage } from '@features/language/language.slice';

import LinearProgress from '@material-ui/core/LinearProgress';

import { useStyles } from '@pages';

import { ModalComponent, DrawerComponent, HeaderComponent, FooterComponent } from '@components'


function App() {

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const useMountEffect = (fun: any) => useEffect(fun, []);
   // eslint-enable-next-line react-hooks/exhaustive-deps
   const dispatch = useDispatch();
   const classes = useStyles();
   const LOADERS = useSelector(selectLoaders)
  const LANGUAGE = useSelector(selectLanguage)
  const DARK_MODE = useSelector(selectDarkMode)
  
 
   useMountEffect(() => {
     dispatch( setLanguage( LANGUAGE.language ) )
   } )

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

          <HeaderComponent />

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