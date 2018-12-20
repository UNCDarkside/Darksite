/**
 * Keys of the breakpoints used for responsive styles.
 */
export type Breakpoints = {
  sm: string;
  md: string;
};

/**
 * Keys of the different colors used through the application.
 */
export type Colors = {
  accent: string;
  accentDark: string;
  accentLight: string;
  divider: string;
  primary: string;
  primaryInverted: string;
  text: string;
  textMuted: string;
};

/**
 * Keys for the different font families used in the application.
 */
export type FontFamilies = {
  base: string;
  headings: string;
};

/**
 * Keys of the names used for different font sizes.
 */
export type FontSizes = {
  display: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
};

/**
 * The shape of the styling theme for the application.
 */
export interface ThemeInterface {
  borderRadius: number;
  breakpoints: Breakpoints;
  colors: Colors;
  fonts: {
    families: FontFamilies;
    sizes: FontSizes;
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
    accentDark: "#0062c4",
    accentLight: "#00b3ff",
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
