import React from "react";

// styles
import styles from "./index.module.scss";

const Layout = ({ children, vertical, center }) => {
  const $className = [styles.layout];

  if (vertical) $className.push(styles.vertical);
  if (center) $className.push(styles.center);

  return <div className={$className.join(" ")}>{children}</div>;
};

export default Layout;
