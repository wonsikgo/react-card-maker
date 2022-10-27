import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useState } from "react";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Wonsik",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "wonsik",
      fileURL: null,
    },
    {
      id: "2",
      name: "Wonsik2",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "wonsik",
      fileURL: "ellie.png",
    },
    {
      id: "3",
      name: "Wonsik3",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "wonsik",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  const deleteCard = (id) => {
    const index = cards.findIndex((card) => card.id === id);
    console.log(`index : ${index}`);
    if (index !== -1) {
      const updated = [...cards];
      updated.splice(index, 1);
      setCards(updated);
    }
  };

  const updateCard = (card) => {
    console.log(card);
    const index = cards.findIndex((item) => item.id === card.id);
    console.log(`index : ${index}`);
    if (index !== -1) {
      const updated = [...cards];
      updated[index] = card;
      setCards(updated);
    }
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={addCard}
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
