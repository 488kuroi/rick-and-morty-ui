import { createTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";

import { IPalette, IThemeOptions} from './index'
import { COMMON_OVERRIDES } from './common.overrides'


const theme = createTheme({
  overrides: COMMON_OVERRIDES,
  typography: {
    allVariants: {
      color: "#FFF"
    },
  },
  buttons: {
    color: 'red'
  },
  palette: createPalette({
    type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#d64f9f',
      main: '#ed008c',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    background: {
      default: '#1f1f1f',
      paper: '#303030',
    },
    footer: {
      border: '#FFF'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  } as IPalette ),
} as IThemeOptions );

export default theme;
