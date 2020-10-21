import React from "react";

import styles from "./index.module.scss";

export default (props) => {
  const { className, title, placeholder, onChange, ...propsRest } = props;

  const $className = [styles.input];

  if (className) $className.push(className);

  const $onChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={styles.container}>
      {title && <label>{title}</label>}
      <input
        className={$className.join(" ")}
        placeholder={placeholder}
        onChange={(e) => $onChange(e.target.value)}
        {...propsRest}
      />
    </div>
  );
};
