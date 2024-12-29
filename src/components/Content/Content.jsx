import Card from './components/Card/Card';
import React from 'react';

// const tarifCard = [
//   {
//     title: "Безлимитный",
//     price: "300",
//     speed: "10",
//     description: "Объём включенного трафика не ограничен"
//   },
//   {
//     title: "Безлимитный",
//     price: "450",
//     speed: "50",
//     description: "Объём включенного трафика не ограничен"
//   },
//   {
//     title: "Безлимитный",
//     price: "550",
//     speed: "100",
//     description: "Объём включенного трафика не ограничен"
//   },
//   {
//     title: "Безлимитный",
//     price: "1000",
//     speed: "200",
//     description: "Объём включенного трафика не ограничен"
//   }
// ]

// function Content({ tarifCard }) {
//   return (
//     <>
//       {tarifCard.map((card) => (
//         <Card {card.title} />
//       ))}
//     </>
//   );
// }

// export default Content;

function Content() {
  return (
    <React.Fragment>
      <Card
        title="Безлимитный"
        price="300"
        speed="10"
        description="Объём включенного трафика не ограничен"
      />
      <Card
        title="Безлимитный"
        price="450"
        speed="50"
        description="Объём включенного трафика не ограничен"
      />
      <Card
        title="Безлимитный"
        price="550"
        speed="100"
        description="Объём включенного трафика не ограничен"
      />
      <Card
        title="Безлимитный"
        price="1000"
        speed="200"
        description="Объём включенного трафика не ограничен"
      />
    </React.Fragment>
  );
}

export default Content;