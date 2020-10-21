import React from "react";
import styles from "./index.module.scss";
import ListItem from "./ListItem";

const List = ({ questions }) => {
  return (
    <ul className={styles.list}>
      {questions.map((question) => {
        return <ListItem question={question} />;
      })}
    </ul>
  );
};

export default List;
