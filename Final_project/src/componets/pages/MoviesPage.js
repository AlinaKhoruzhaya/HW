import { useEffect } from "react";
import MoviesList from "../layout/MoviesList";

function Movies() {

    useEffect(() => {
        document.title = 'Movies';
    }, []);

    return (
        <MoviesList />
    )
}

export default Movies;
