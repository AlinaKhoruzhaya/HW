import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500"

const SingleMovie = () => {
    const params = useParams();
    const id = params.id;
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    async function fetchData() {
        axios.get(baseURL + id, {
            params: {
                api_key: apiKey,
            }
        })
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    useEffect(() => {
        fetchData()
    }, []);

    if (error) {
        return (<div className="error"> <h2>{error}</h2> </div>)
    } else if (movie) {
        return (
            <div className="movie">
                <img src={imgBaseURL + movie.poster_path} />
                <h2>{movie.title}</h2>
            </div>
        )
    }
};

export default SingleMovie;
