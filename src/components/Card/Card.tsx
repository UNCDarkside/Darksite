import * as React from "react";

import * as styles from "./Card.css";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * A card that renders its children within a container that is styled to appear
 * raised above the surface it's located on.
 *
 * @param children - The children to render.
 * @constructor
 */
const Card: React.FunctionComponent<IProps> = ({ children }) => (
  <div className={styles.card}>{children}</div>
);

export default Card;
