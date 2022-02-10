import {
  createStyles,
  lighten,
  makeStyles,
} from "@material-ui/core/styles";

import { ITheme } from '@themes'


const useStyles = makeStyles((theme: ITheme) => 
  createStyles({
    // COMMON STYLES
    dFlex: {
      display: 'flex'
    },
    flexRow: {
      flexDirection: 'row'
    },
    flexCol: {
      flexDirection: 'column'
    },
    justCenter: {
      justifyContent: 'center'
    },
    justEnd: {
      justifyContent: 'end'
    },
    justStart: {
      justifyContent: 'start'
    },
    justBetween: {
      justifyContent: 'space-between'
    },
    alignCenter: {
      alignItems: 'center'
    },
    alignEnd: {
      alignItems: 'end'
    },
    alignStart: {
      alignItems: 'start'
    },
    AppContainer: {
      minHeight: '100vh',
      '&.App': {
        display: 'flex',
        flexDirection: 'column',
        '&_dark': {
          backgroundColor: '#1f1f1f',
        },
        '&_light': {
          backgroundColor: '#dedede',
        },
      },
      '& .Footer': {
        marginTop: 'auto',
      },
      '& .Page': {
        flexGrow: 1,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/page-bg.png'})`,
        '&:not( .Page_index )': {
          padding: theme.spacing(25, 10, 10),
        }
      }
    },
    tableActions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      flexDirection: 'row',
      '& .MuiTypography-root': {
        display: 'inline-block',
        width: '155px',
      },
      '& .MuiButtonBase-root': {
        marginRight: theme.spacing( 2 ),
      }
    },
  })
);

export default useStyles;
