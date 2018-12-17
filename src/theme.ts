export interface ThemeInterface {
  colors: {
    primary: string;
    primaryInverted: string;
  };
  fonts: {
    base: string;
    headings: string;
  };
}

/**
 * The default theme for the application.
 */
const theme: ThemeInterface = {
  colors: {
    primary: "black",
    primaryInverted: "white"
  },
  fonts: {
    base: "'Open Sans', sans-serif",
    headings: "'Roboto', sans-serif"
  }
};

export default theme;
