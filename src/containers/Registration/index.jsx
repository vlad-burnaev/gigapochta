import React from "react";
import { Link } from "react-router-dom";

// components
import Logo from "../../components/UI/Logo";
import Layout from "../../components/UI/Layout";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

// styles
import styles from "./index.module.scss";
import AuthLayout from "../AuthLayout";

const Questions = () => {
  return (
    <AuthLayout>
      <div className={styles.inner}>
        <h2>Регистрация</h2>
        <Input
          style={{ marginBottom: "14px" }}
          title="Имя"
          placeholder="Иванов Иван Иванович"
        />
        <Input
          style={{ marginBottom: "14px" }}
          title="Электронная почта"
          placeholder="@"
        />
        <Input
          style={{ marginBottom: "14px" }}
          title="Пароль"
          type="password"
        />
        <Input
          style={{ marginBottom: "14px" }}
          title="Повторите пароль"
          type="password"
        />
        <div className={styles.personalData}>
          <input type="checkbox" />
          <span>Согласие на обработку персональных данных</span>
        </div>
        <div className={styles.registration}>
          <Button active className={styles.regBtn}>
            Зарегистрироваться
          </Button>
        </div>
        <div className={styles.signup}>
          <div>Есть учетная запись?</div>
          <Link to="/">
            <Button>Войти</Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Questions;
