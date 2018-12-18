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
    text: string;
    textMuted: string;
  };
  fonts: {
    families: {
      base: string;
      headings: string;
    };
    sizes: {
      display: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
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
    text: "black",
    textMuted: "#555"
  },
  fonts: {
    families: {
      base: "'Open Sans', sans-serif",
      headings: "'Roboto', sans-serif"
    },
    sizes: {
      display: "3.5rem",
      h1: "3rem",
      h2: "2.5rem",
      h3: "2rem",
      h4: "1.5rem",
      h5: "1.25rem",
      h6: "1rem"
    }
  }
};

export default theme;
