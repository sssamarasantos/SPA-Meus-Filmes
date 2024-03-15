import { MovieItem } from "../MovieItem/MovieItem"

export const MoviesList = ({ movies }) => (
    <ul>
        {movies.map(movie => <MovieItem movie={movie} />)}
    </ul>
)