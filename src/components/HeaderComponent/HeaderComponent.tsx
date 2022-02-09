import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDrawer  } from '@selectors';
import { toggleDrawer } from '@src/store/features/drawer/drawer.slice';

import { makeStyles } from '@material-ui/core';
import { useStyles as commonStyles } from '@pages';

import { ITheme } from "@src/assets/themes";

import {
  IconButton,
} from '@material-ui/core';

import {
  MenuOutlined,
} from '@mui/icons-material';

import Logo from '@images/backgrounds/logo.png';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: ITheme) => ({
  header: {
    padding: theme.spacing(3, 5),
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 500,
  },
  logo: {
    height: 'auto',
    width: theme.spacing(50),
  }
}));

interface HeaderComponentProps { }

const HeaderComponent: FC<HeaderComponentProps> = () => {

  const commonClasses = commonStyles();
  const classes = useStyles();
  const dispatch = useDispatch();
  const DRAWER = useSelector(selectDrawer);

  const onToggleClick = ( isOpen: boolean ) => dispatch( toggleDrawer( isOpen ) )

  return (
    <div
      data-testid="HeaderComponent"
      className={` Header ${commonClasses.dFlex} ${commonClasses.alignStart} ${commonClasses.flexRow} ${commonClasses.justBetween} ${classes.header}`}
    >

      <Link to={`/`}>
        <img className={classes.logo} src={Logo} alt="logo" />
      </Link>
      <IconButton onClick={() => onToggleClick( !DRAWER.isOpen ) }>
        <MenuOutlined />
      </IconButton>

    </div>
  )


};

export default HeaderComponent;
