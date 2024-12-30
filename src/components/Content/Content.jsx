import React from 'react';
import TariffCard from "../TariffCard/TariffCard";

function Content() {
  return (
    <React.Fragment>
      <TariffCard
        color="#2cc1d5"
        price="300"
        speed="10"
        description="Объем включенного трафика не ограничен"
      />
      <TariffCard
        color="#24ae8d"
        price="450"
        speed="50"
        description="Объем включенного трафика не ограничен"
      />
      <TariffCard
        color="#f46a5f"
        price="550"
        speed="100"
        description="Объем включенного трафика не ограничен"
      />
      <TariffCard
        color="#333a44"
        price="1000"
        speed="200"
        description="Объем включенного трафика не ограничен"
      />
    </React.Fragment>
  );
}

export default Content;