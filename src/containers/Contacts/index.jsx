import React from "react";
import { Link } from "react-router-dom";

// components
import Button from "../../components/UI/Button";

// styles
import styles from "./index.module.scss";
import OtherLayout from "../OtherLayout";

const Contacts = () => {
  return (
    <OtherLayout>
      <span className={styles.title}>Контакты и реквизиты</span>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <div className={styles.subtitle}>
            <p>
              <span>ООО «ГигаПочта»</span>
              <br />
              <br />
              ОГРН 119774642990
              <br />
              ИНН 7704495306
            </p>
          </div>
          <div className={styles.address}>
            <p>119435 Москва Б. Саввинский 11</p>
            <p>
              Email: &nbsp;
              <a href="mailto:hi@gigapochta.ru">hi@gigapochta.ru</a>
            </p>
          </div>
          <div className={styles.bank}>
            <p>Банковские реквизиты</p>
            <span>
              счет 40702 810702330003397
              <br />
              в АО «АЛЬФА-БАНК»
              <br />
              БИК 044525593
            </span>
          </div>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A34b55570b84eead1e10221964bce17ecd98f49a6f83ceee569becb318c3f78cc&amp;source=constructor"
          width="100%"
          height="600"
          frameborder="0"
          className={styles.map}
        ></iframe>
      </div>
    </OtherLayout>
  );
};

export default Contacts;
