import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList/MoviesList";
import { MoviesContainer } from "../styles/Movies/MoviesContainer";
import { MoviesService } from "../api/MoviesService";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const { data } = await MoviesService.getMoviesPopular();
        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <MoviesContainer>
            <MoviesList movies={movies} />
        </MoviesContainer>
    );
}