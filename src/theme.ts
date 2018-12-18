export interface ThemeInterface {
  borderRadius: number;
  breakpoints: {
    sm: string;
    md: string;
  };
  colors: {
    accent: string;
    divider: string;
    primary: string;
    primaryInverted: string;
    textMuted: string;
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
  borderRadius: 5,
  breakpoints: {
    sm: "480px",
    md: "640px"
  },
  colors: {
    accent: "#007bff",
    divider: "#ddd",
    primary: "black",
    primaryInverted: "white",
    textMuted: "#555"
  },
  fonts: {
    families: {
      base: "'Open Sans', sans-serif",
      headings: "'Roboto', sans-serif"
    }
  }
};

export default theme;
