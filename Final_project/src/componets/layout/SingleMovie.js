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
            <div className="bg_single_movie">
                <div className="img_bg_single_movie"></div>
                <div className="container_single_movie">
                    <h2 className='name_movie'> {movie.title}</h2>
                    <div className="movie">
                        <img className="poster_single_movie" src={imgBaseURL + movie.poster_path} />
                        <div className="info_movie">
                            <p className="rating">{movie.vote_average}</p>
                            <p className="runtime">Running time: {movie.runtime} min</p>
                            <p className="release_date">Premiere: {movie.release_date}</p>
                            <p className="tagline">Tagline: {movie.tagline}</p>
                        </div>
                    </div >
                    <p className="overview">{movie.overview}</p>
                </div >
            </div >

        )
    };
}



export default SingleMovie;
