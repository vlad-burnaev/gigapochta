import React from "react";
import { Link } from "react-router-dom";

// components
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

// styles
import styles from "./index.module.scss";
import AuthLayout from "../AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <div className={styles.inner}>
        <h2>Войти</h2>
        <Input
          style={{ marginBottom: "14px" }}
          title="Адрес электронной почты"
          placeholder="@"
        />
        <Input
          style={{ marginBottom: "14px" }}
          title="Пароль"
          type="password"
        />
        <div className={styles.forgetPassword}>
          <Link to="/forgot">Забыли пароль?</Link>
          <Button active>Войти</Button>
        </div>
        <div className={styles.signup}>
          <div>Нет учётной записи?</div>
          <Link to="/signup">
            <Button>Зарегистрироваться</Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
