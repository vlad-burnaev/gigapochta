import React, { useContext } from "react";
import styles from "./index.module.scss";
import Context from "../Context";

const ListItem = ({ question }) => {
  const { toggleQuestion } = useContext(Context);
  return (
    <li className={styles.listItem} onClick={() => toggleQuestion(question.id)}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{question.title}</p>
        <span className={styles.cross}>&#10010;</span>
      </div>
      <span className={question.contentVisibility ? "" : styles.hidden}>
        {question.content}
      </span>
    </li>
  );
};

export default ListItem;
