export interface ThemeInterface {
  breakpoints: {
    sm: string;
  };
  colors: {
    accent: string;
    divider: string;
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
    accent: "#007bff",
    divider: "#ddd",
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
