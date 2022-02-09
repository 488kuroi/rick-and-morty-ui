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
      }
    },
    table: {
      minWidth: 750,
      maxWidth: '100%',
    },
    totalRows: {
      backgroundColor: theme.palette.primary.main,
      '& .MuiTableCell-root': {
        color: theme.palette.common.white,
        fontWeight: 'bold'
      }
      
    },
    hiddenScrollXtable: {
      '& .MuiTableContainer-root': {
        overflowX: 'hidden',
      }
    },
    evenGrey: {
      "&:nth-of-type(even)": {
        // backgroundColor: (theme.palette.background as any).lightGrey,
      },
    },
    headCell: {
      "& .MuiCheckbox-root": {
        color: theme.palette.primary.main,
      },
    },
    highlight: {
      color: theme.palette.primary.main + "!important",
      backgroundColor: lighten(theme.palette.primary.main, 0.85) + "!important",
    },
    highlight_dark: {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.common.black,
      "& > .MuiTableCell-root": {
        backgroundColor: theme.palette.common.black,
      },
    },
    checkboxes_dark: {
      color: theme.palette.common.white,
    },
  })
);

export default useStyles;
