import './App.css';
import { Header } from './components/Header/Header';
import { MoviesList } from './components/MoviesList/MoviesList';

function App() {
  return (
    <div className="App">
      <Header />

      <section>
        <MoviesList movies={[]} />
      </section>
    </div>
  );
}

export default App;
