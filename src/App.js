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
  const handleClick = () => {
    const cardsCopy = cards.slice();
    const shuffledCards = [];
    for (let i = 0; i < cards.length; i++) {
      console.log(cardsCopy.length);
      let index = Math.floor(Math.random()*cardsCopy.length);
      console.log(index);
      shuffledCards[i] = cardsCopy[index];
      cardsCopy.splice(index, 1);
      console.log(cardsCopy.toString());
    }
    console.log(shuffledCards.toString());
    setCards(shuffledCards);
    //setClickedCards(...clickedCards, name);
  }
  return (
    <ul className="App">
      {cards.map(card => {
        return <li key={card.id}><Card handleClick={handleClick} name={card.name}/></li>
      })}
    </ul>
  );
}

export default App;
