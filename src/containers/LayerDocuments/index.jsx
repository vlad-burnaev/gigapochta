import React from "react";
import { Link } from "react-router-dom";

// components
import Button from "../../components/UI/Button";

// styles
import styles from "./index.module.scss";
import OtherLayout from "../OtherLayout";

const LayerDocuments = () => {
  return (
    <OtherLayout>
      <span className={styles.headerTitle}>Юридические документы</span>
      <div className={styles.partList}>
        <h3 className={styles.title}>Порядок оказания услуг почтовой связи</h3>
        <ol>
          <li className={styles.listItem}>
            <span className={styles.subtitle}>Термины и определения</span>
            <ol>
              <li>
                Оператор — юридическое лицо, сведения о котором указаны в статье
                2
              </li>
              <li>
                Оператор — юридическое лицо, сведения о котором указаны в статье
                2
              </li>
              <li>
                Оператор — юридическое лицо, сведения о котором указаны в статье
                2
              </li>
            </ol>
          </li>
          <li className={styles.listItem}>
            <span className={styles.subtitle}>Порядок оказания Услуг</span>
            <ol>
              <li>Пользователь Авторизуется на Сайте или в Приложении.</li>
              <li>
                Пользователь загружает на Сайт или в Приложение Файл
                отправления, а также (опционально) Файл ЭП.
              </li>
              <li>
                Пользователь указывает на Сайте или в Приложении Отправителя,
                Получателя и их почтовые адреса.
              </li>
            </ol>
          </li>
          <li className={styles.listItem}>
            <span className={styles.subtitle}>Стоимость Услуг</span>
            <ol>
              <li>
                Стоимость Услуг рассчитывается исходя из объема вложения
                (количество листов на которых будет распечатан Файл печатной
                формы), типа конверта, адреса Получателя
              </li>
              <li>
                Стоимость услуг рассчитывается автоматически на сайте и в
                приложении и сообщается Пользователю до оплаты. Оператор вправе
                при расчете стоимости услуг предоставить Пользователю скидку.
              </li>
              <li>
                Стоимость услуг рассчитывается автоматически на сайте и в
                приложении и сообщается Пользователю до оплаты.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div className={styles.partList}>
        <h3 className={styles.title}>Политика обработки персональных данных</h3>
        <ol>
          <li className={styles.listItem}>
            <span className={styles.subtitle}>
              Назначение и область действия
            </span>
            <ol>
              <li>
                Оператор — юридическое лицо, сведения о котором указаны в статье
                2
              </li>
              <li>
                Оператор — юридическое лицо, сведения о котором указаны в статье
                2
              </li>
              <li>
                Оператор — юридическое лицо, сведения о котором указаны в статье
                2
              </li>
            </ol>
          </li>
          <li className={styles.listItem}>
            <span className={styles.subtitle}>
              Сведения об обработке персональных данных
            </span>
            <ol>
              <li>Пользователь Авторизуется на Сайте или в Приложении.</li>
              <li>
                Пользователь загружает на Сайт или в Приложение Файл
                отправления, а также (опционально) Файл ЭП.
              </li>
              <li>
                Пользователь указывает на Сайте или в Приложении Отправителя,
                Получателя и их почтовые адреса.
              </li>
            </ol>
          </li>
          <li className={styles.listItem}>
            <span className={styles.subtitle}>
              Меры по обеспечению безопасности персональных данных
            </span>
            <ol>
              <li>
                Стоимость Услуг рассчитывается исходя из объема вложения
                (количество листов на которых будет распечатан Файл печатной
                формы), типа конверта, адреса Получателя
              </li>
              <li>
                Стоимость услуг рассчитывается автоматически на сайте и в
                приложении и сообщается Пользователю до оплаты. Оператор вправе
                при расчете стоимости услуг предоставить Пользователю скидку.
              </li>
              <li>
                Стоимость услуг рассчитывается автоматически на сайте и в
                приложении и сообщается Пользователю до оплаты.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div className={styles.partList}>
        <h3 className={styles.title}>Лицензионный договор</h3>
        <ol>
          <li className={styles.listItem}>
            <span className={styles.subtitle}>Термины и определения</span>
            <ol>
              <li>
                Оператор — юридическое лицо, сведения о котором указаны в статье
                2
              </li>
              <li>
                Оператор — юридическое лицо, сведения о котором указаны в статье
                2
              </li>
              <li>
                Оператор — юридическое лицо, сведения о котором указаны в статье
                2
              </li>
            </ol>
          </li>
          <li className={styles.listItem}>
            <span className={styles.subtitle}>
              Предмет Лицензионного договора
            </span>
            <ol>
              <li>Пользователь Авторизуется на Сайте или в Приложении.</li>
              <li>
                Пользователь загружает на Сайт или в Приложение Файл
                отправления, а также (опционально) Файл ЭП.
              </li>
              <li>
                Пользователь указывает на Сайте или в Приложении Отправителя,
                Получателя и их почтовые адреса.
              </li>
            </ol>
          </li>
          <li className={styles.listItem}>
            <span className={styles.subtitle}>Исключительные права</span>
            <ol>
              <li>
                Стоимость Услуг рассчитывается исходя из объема вложения
                (количество листов на которых будет распечатан Файл печатной
                формы), типа конверта, адреса Получателя
              </li>
              <li>
                Стоимость услуг рассчитывается автоматически на сайте и в
                приложении и сообщается Пользователю до оплаты. Оператор вправе
                при расчете стоимости услуг предоставить Пользователю скидку.
              </li>
              <li>
                Стоимость услуг рассчитывается автоматически на сайте и в
                приложении и сообщается Пользователю до оплаты.
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </OtherLayout>
  );
};

export default LayerDocuments;
