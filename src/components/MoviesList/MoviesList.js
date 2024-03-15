import { MovieItem } from "../MovieItem/MovieItem"

export const MoviesList = ({ movies }) => (
    <ul>
        {movies.map(m => <MovieItem title={m.title} />)}
    </ul>
)