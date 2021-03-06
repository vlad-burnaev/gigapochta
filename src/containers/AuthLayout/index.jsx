import React from "react";
import { Link } from "react-router-dom";

// components
import Logo from "../../components/UI/Logo";

// styles
import styles from "./index.module.scss";

const AuthLayout = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <div className={styles.inner}>
          <h1>Отправляйте заказные письма с&nbsp;любого устройства</h1>
          <div className={styles.content}>
            <p>Мгновенное юридически безупречное подтверждение.</p>
            <p>
              Соответствует статьям <b>132 ГПК РФ</b>, <b>126 АПК РФ</b> и{" "}
              <b>126 КАС РФ</b>.
            </p>
          </div>
          <a href="#!" className={styles.video}>
            <svg
              width="72"
              height="42"
              viewBox="0 0 72 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.1 41.3H20.8C9.6 41.3 0.5 32.2 0.5 21C0.5 9.80001 9.6 0.700012 20.8 0.700012H51.1C62.3 0.700012 71.4 9.80001 71.4 21C71.4 32.2 62.2 41.3 51.1 41.3ZM20.8 2.30001C10.4 2.30001 2 10.7 2 21C2 31.3 10.4 39.8 20.8 39.8H51.1C61.4 39.8 69.9 31.4 69.9 21C69.9 10.6 61.5 2.20001 51.1 2.20001H20.8V2.30001Z"
                fill="black"
              />
              <path
                d="M32.7 14.2V28.3C32.7 28.6 33 28.7 33.2 28.6L42.8 21.5C43 21.4 43 21.1 42.8 21L33.2 13.9C33 13.8 32.7 14 32.7 14.2Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M68 20.9543C68 11.9965 60.4956 4.64282 51 4V5.2594C59.7675 5.89594 66.6439 12.6669 66.6439 20.9543H68Z"
                fill="black"
              />
            </svg>
            Тарифы Почты России
          </a>
        </div>
        <div className={[styles.notes, styles.legal].join(" ")}>
          <b>
            Оператор связи ООО &laquo;ГигаПочта&raquo; ОГРН
            119774642990&nbsp;ИНН
          </b>
          <br />
          Лицензия на&nbsp;оказание услуг почтовой связи на&nbsp;всей территории
          РФ&nbsp;176081 от&nbsp;24.07.2019 выдана Федеральной службой
          по&nbsp;надзору в&nbsp;сфере связи, информационных технологий
          и&nbsp;массовых коммуникаций (Роскомнадзор).
        </div>
      </div>
      <div className={styles.authContent}>
        {props.children}

        <div className={styles.notes}>
          <Link to="/contacts">Контакты и реквизиты</Link>
          <br />
          <Link to="/questions">Вопросы и ответы</Link>
          <br />
          <Link to="/layerDocuments">Юридические документы</Link>
        </div>
        <div className={styles.legal}>
          <b>
            Оператор связи ООО &laquo;ГигаПочта&raquo; ОГРН
            119774642990&nbsp;ИНН
          </b>
          <br />
          Лицензия на&nbsp;оказание услуг почтовой связи на&nbsp;всей территории
          РФ&nbsp;176081 от&nbsp;24.07.2019 выдана Федеральной службой
          по&nbsp;надзору в&nbsp;сфере связи, информационных технологий
          и&nbsp;массовых коммуникаций (Роскомнадзор).
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
