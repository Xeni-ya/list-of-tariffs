
import TariffCard from "../TariffCard/TariffCard";
import './content.css';

function Content() {
  return (
    <div className="container">
      <TariffCard
        price="300"
        speed="10"
        description="Объем включенного трафика не ограничен"
        colorHeader="#239ba9"
        colorPrice="#2cc1d5"
      />
      <TariffCard
        price="450"
        speed="50"
        description="Объем включенного трафика не ограничен"
        colorHeader="#1d8971"
        colorPrice="#24ae8d"
      />
      <TariffCard
        price="550"
        speed="100"
        description="Объем включенного трафика не ограничен"
        colorHeader="#c75249"
        colorPrice="#f46a5d"
      />
      <TariffCard
        price="1000"
        speed="200"
        description="Объем включенного трафика не ограничен"
        colorHeader="#282f37"
        colorPrice="#333a44"
      />
    </div>
  );
}

export default Content;