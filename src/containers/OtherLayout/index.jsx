import React from "react";
import { Link } from "react-router-dom";

// components
import Logo from "../../components/UI/Logo";

// styles
import styles from "./index.module.scss";
import Button from "../../components/UI/Button";

const OtherLayout = (props) => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Button>Назад </Button>
      </Link>
      <div className={styles.inner}>{props.children}</div>
    </div>
  );
};

export default OtherLayout;
