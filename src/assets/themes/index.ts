import { ThemeOptions, Theme } from "@material-ui/core/styles";
import { Palette } from "@material-ui/core/styles/createPalette";

import light from './light'
import dark from './dark'

interface IPalette extends Palette {
  footer?: any
}
interface ITheme extends Theme {
  palette: IPalette;
  link?: any;
}
interface IThemeOptions extends ThemeOptions {
  palette: IPalette;
}

export type { IPalette, ITheme, IThemeOptions };

export {
  light,
  dark,
}