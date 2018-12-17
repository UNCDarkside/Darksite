export interface ThemeInterface {
  breakpoints: {
    sm: string;
  };
  colors: {
    primary: string;
    primaryInverted: string;
  };
  fonts: {
    families: {
      base: string;
      headings: string;
    };
  };
}

/**
 * The default theme for the application.
 */
const theme: ThemeInterface = {
  breakpoints: {
    sm: "480px"
  },
  colors: {
    primary: "black",
    primaryInverted: "white"
  },
  fonts: {
    families: {
      base: "'Open Sans', sans-serif",
      headings: "'Roboto', sans-serif"
    }
  }
};

export default theme;
