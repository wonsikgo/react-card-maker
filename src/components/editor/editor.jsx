import React from "react";
import Card from "../card/card";
import styles from "./editor.module.css";

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => (
      <Card card={card} key={card.id} />
    ))}
  </section>
);

export default Editor;
