import * as React from "react";

import * as styles from "./Container.css";

interface IProps {
  children: React.ReactNode[] | React.ReactNode;
}

const Container: React.SFC<IProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
