import { createTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";

import { IPalette, IThemeOptions} from './index'
import { COMMON_OVERRIDES } from './common.overrides'


const theme = createTheme({
  overrides: COMMON_OVERRIDES,
  typography: {
    allVariants: {
      color: "#333"
    },
  },
  link: {
    color: '#333',
  },
  palette: createPalette({
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#d64f9f',
      main: '#ed008c',
      contrastText: '#FFF'
    },
    background: {
      default: '#dedede',
      paper: '#FFF',
    },
    footer: {
      border: '#333'
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

