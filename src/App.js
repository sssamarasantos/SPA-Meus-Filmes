import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MoviesList } from './components/MoviesList/MoviesList';
import { MoviesService } from './api/MoviesService';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await MoviesService.getMoviesPopular();
    setMovies(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header />

      <section>
        <MoviesList movies={movies} />
      </section>
    </div>
  );
}

export default App;
