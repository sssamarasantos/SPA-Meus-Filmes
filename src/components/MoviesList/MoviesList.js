import { MoviesContainer } from "../../styles/Movies/MoviesContainer"
import { MovieItem } from "../MovieItem/MovieItem"

export const MoviesList = ({ movies }) => (
    <MoviesContainer>
        <ul>
            {movies.map(m => <MovieItem title={m.title} />)}
        </ul>
    </MoviesContainer>
)