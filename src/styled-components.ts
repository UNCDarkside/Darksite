/**
 * Our configuration for Typescript and styled-components as laid out in the
 * styled-components documentation.
 *
 * https://www.styled-components.com/docs/api#typescript
 */

import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { ThemeInterface } from "./theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
