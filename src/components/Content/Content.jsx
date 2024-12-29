import Card from './Card';
import React from 'react';

const tarifCard = [
  {
    title: "Безлимитный",
    price: "300",
    speed: "10",
    description: "Объём включенного трафика не ограничен",
  },
  {
    title: "Безлимитный",
    price: "450",
    speed: "50",
    description: "Объём включенного трафика не ограничен",
  },
  {
    title: "Безлимитный",
    price: "550",
    speed: "100",
    description: "Объём включенного трафика не ограничен",
  },
  {
    title: "Безлимитный",
    price: "1000",
    speed: "200",
    description: "Объём включенного трафика не ограничен",
  }
]

function Content() {
  return (
    <React.Fragment>
      <Card price={card.price} speed={card.speed} description={card.description} />
    </React.Fragment>
  );
}

export default Content;