import React from "react";

import styles from "./index.module.scss";

export default (props) => {
  const {
    children,
    onClick,
    className,
    disabled,
    loading,
    simple = false,
    href,
    active,
    ...propsRest
  } = props;

  const $className = [styles.btn];

  if (!simple) $className.push(styles.decoration);
  if (href) $className.push(styles.href);
  if (className) $className.push(className);
  if (disabled) $className.push(styles.disabled);

  if (active) $className.push(styles.active);

  return !href ? (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={$className.join(" ")}
      {...propsRest}
    >
      {loading ? "Loading..." : children}
    </button>
  ) : (
    <a className={$className.join(" ")} href={href} {...propsRest}>
      {children}
    </a>
  );
};
