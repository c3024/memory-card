import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';
import uniqid from 'uniqid';

function App() {
  const [cards, setCards] = useState( [
      { name: "Ant", id: uniqid() },
      { name: "Bat", id: uniqid() },
      { name: "Cat", id: uniqid() },
      { name: "Dog", id: uniqid() },
      { name: "Elephant", id: uniqid() },
      { name: "Frog", id: uniqid() },
      { name: "Goat", id: uniqid() }, 
    ] 
  );
  const [clickedCards, setClickedCards] = useState([]);
  function handleClick(id)  {
    console.log(clickedCards);
    const clickedCard = cards.filter(function (card) {
        return id === card.id;
      }
    );
    console.log(clickedCard);
    if (clickedCards.includes(clickedCard[0].name)) {
      console.log("Game Over!");
      return;
    }
    const cardsCopy = cards.slice();
    const shuffledCards = [];
    for (let i = 0; i < cards.length; i++) {
      //console.log(cardsCopy.length);
      let index = Math.floor(Math.random()*cardsCopy.length);
      //console.log(index);
      shuffledCards[i] = cardsCopy[index];
      cardsCopy.splice(index, 1);
      //console.log(cardsCopy.toString());
    }
    //console.log(shuffledCards.toString());
    setCards(shuffledCards);
    //console.log(clickedCard.name);
    setClickedCards([...clickedCards, clickedCard[0].name]);
  }
  return (
    <ul className="App">
      {cards.map(card => {
        return <li key={card.id}><Card handleClick={handleClick} name={card.name} id={card.id}/></li>
      })}
    </ul>
  );
}

export default App;
