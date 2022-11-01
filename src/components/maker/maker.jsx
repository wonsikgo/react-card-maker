import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useState } from "react";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
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
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
