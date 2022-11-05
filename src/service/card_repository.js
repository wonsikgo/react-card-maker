import firebaseApp from "./firebase";

class CardRepository {
  saveCard(userId, card) {
    console.log(`userId : ${userId}`);
    console.log(`card : ${card}`);
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card) {
    console.log(`userId : ${userId}`);
    console.log(`card : ${card}`);
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
