import React from "react";
import { Link } from "react-router-dom";

// components
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

// styles
import styles from "./index.module.scss";
import AuthLayout from "../AuthLayout";

const ForgotPass = () => {
  return (
    <AuthLayout>
      <div className={styles.inner}>
        <h2>Восстановление пароля</h2>
        <Input
          style={{ marginBottom: "14px" }}
          title="Адрес электронной почты"
          placeholder="@"
        />
        <div className={styles.forgetPassword}>
          <Button active>Восстановить пароль</Button>
        </div>
        <div className={styles.signup}>
          <Link to="/">
            <Button>Вернуться на страницу входа </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPass;
