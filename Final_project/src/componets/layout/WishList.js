import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500"


const WishList = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    function fetchData(id) {
        axios.get(baseURL + id, {
            params: {
                api_key: apiKey,
            }
        })
            .then(response => {
                setMovies(movies => [...movies, response.data]);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (!key.indexOf('movie-')) {
                fetchData(localStorage.getItem(key));
            }
        }
    }, []);
    if (error) {
        return (<div className="error"><h2>{error}</h2></div>)
    } else if (movies) {
        const items = movies.map((movie, index) => {
            return (
                <div key={index} className="movie">
                    <img src={imgBaseURL + movie.poster_path} />
                    <h2>{movie.title}</h2>
                </div>)
        });

        return (
            <div>{items}</div>
        );
    }
}

export default WishList;
