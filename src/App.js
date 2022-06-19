import './App.scss';
import CardList from "./components/CardList";

function App() {
  return (
    <div className="app">
      <main className='main'>
        <div className="container">
          <section className="app__content">
            <h1 className="app__title">Ты сегодня покормил кота?</h1>
            <CardList/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
