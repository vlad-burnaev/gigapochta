import React, { useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../components/List/Context";

// components
import Button from "../../components/UI/Button";
import List from "../../components/List";
import OtherLayout from "../OtherLayout";

// styles
import styles from "./index.module.scss";

const Questions = () => {
  function toggleQuestion(id) {
    setQuestions(
      questions.map((question) => {
        if (question.id === id) {
          question.contentVisibility = !question.contentVisibility;
        }
        return question;
      })
    );
  }
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "Как работает ГигаПочта?",
      content: `Мы мгновенно высылаем Вам кассовый чек. Затем печатаем Ваши электронные документы, упаковываем в конверты, доставляем адресатам. И сообщаем Вам об этом удобным Вам способом (через сайт, email, приложение).`,
      contentVisibility: false,
    },
    {
      id: 2,
      title: "Сколько стоит?",
      content: `Вы платите только за отправляемое письмо.`,
      contentVisibility: false,
    },
    {
      id: 3,
      title: "Как много можно переслать через ГигаПочту?",
      content: `Мы мгновенно высылаем Вам кассовый чек. Затем печатаем Ваши электронные документы, упаковываем в конверты, доставляем адресатам. И сообщаем Вам об этом удобным Вам способом (через сайт, email, приложение).`,
      contentVisibility: false,
    },
    {
      id: 4,
      title:
        "Могу ли я пересылать через ГигаПочту сканы, фотографии, презентации...?",
      content: `Мы мгновенно высылаем Вам кассовый чек. Затем печатаем Ваши электронные документы, упаковываем в конверты, доставляем адресатам. И сообщаем Вам об этом удобным Вам способом (через сайт, email, приложение).`,
      contentVisibility: false,
    },
    {
      id: 5,
      title: "Примет ли суд подтверждение доставки через ГигаПочту?",
      content: `Вы можете пересылать документы из любых программ, которые поддерживают стандартную функцию печати Вашего компьютера Windows или MacOS (есть кнопка "печать", "print" и т.п.): MS Word, MS Excel, MS PowerPoint, Pages, Sheets, 1С, КонсультантПлюс, PDF, GoogleDocs и т.п.`,
      contentVisibility: false,
    },
    {
      id: 6,
      title:
        "Могу ли я пересылать через ГигаПочту сканы, фотографии, презентации...?",
      content: `Мы мгновенно высылаем Вам кассовый чек. Затем печатаем Ваши электронные документы, упаковываем в конверты, доставляем адресатам. И сообщаем Вам об этом удобным Вам способом (через сайт, email, приложение).`,
      contentVisibility: false,
    },
    {
      id: 7,
      title: "Примет ли суд подтверждение доставки через ГигаПочту?",
      content: `Вы можете пересылать документы из любых программ, которые поддерживают стандартную функцию печати Вашего компьютера Windows или MacOS (есть кнопка "печать", "print" и т.п.): MS Word, MS Excel, MS PowerPoint, Pages, Sheets, 1С, КонсультантПлюс, PDF, GoogleDocs и т.п.`,
      contentVisibility: false,
    },
  ]);
  return (
    <OtherLayout>
      <Context.Provider value={{ toggleQuestion }}>
        <div className={styles.inner}>
          <span className={styles.title}>Вопросы и ответы</span>
          <p>
            Вот ответы на самые распространенные вопросы. Не можете найти ответ?
            Напишите нам —{" "}
            <a href="mailto:hi@gigapochta.ru">hi@gigapochta.ru</a>
          </p>
          <List questions={questions} />
        </div>
      </Context.Provider>
    </OtherLayout>
  );
};

export default Questions;
