import { css } from "../styled-components";

/**
 * CSS styles for various shadow depths.
 *
 * Styles taken from the materialize CSS project.
 * https://github.com/Dogfalo/materialize/blob/8af73e2fd50a2209a9ace3abebe97d6fe2af0c72/sass/components/_global.scss
 */
const SHADOWS = {
  0: css`
    box-shadow: none;
  `,
  1: css`
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  `,
  2: css`
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  `,
  3: css`
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  `,
  4: css`
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);
  `,
  5: css`
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
      0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  `
};

export type ShadowDepth = keyof typeof SHADOWS;

/**
 * Get the CSS to add a shadow to a component.
 *
 * @param depth - The depth of the shadow. Higher numbers give the appearance
 *     that the object is higher off of the underlying surface.
 */
const shadow = (depth: ShadowDepth = 3) => SHADOWS[depth];

export default shadow;
