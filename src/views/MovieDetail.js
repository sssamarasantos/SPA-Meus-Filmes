import { useEffect, useState } from "react"
import { MoviesService } from "../api/MoviesService";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    const fetchMovieDetail = async () => {
        const { data } = await MoviesService.getMovieDetails(id);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovieDetail();
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>
            <article>{movie.overview}</article>
        </>
    );
}