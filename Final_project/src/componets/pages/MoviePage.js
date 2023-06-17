import { useEffect } from "react";
import SingleMovie from "../layout/SingleMovie";

function Movies() {

    useEffect(() => {
        document.title = 'Movie';
    }, []);

    return (
        < SingleMovie />
    )
}

export default Movies;
