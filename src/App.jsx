import './App.css';
import Card from './components/Card/Card';
// import traficCard from './traficCard.json';

function App() {
  return (
    <>
      <div className="container">
        {/* {tarifCard.map((card, i) => (
          <Card key={i} {card} />
        ))} */}
        <Card />
      </div>
    </>
  );
}

export default App;
