import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactVideoPlayer from "./ReactVideoPlayer";
import { Link } from "react-router-dom";

const baseURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500"
const imgBgURL = "https://image.tmdb.org/t/p/original/";

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
        let genre = [];
        console.log(movie)
        movie.genres.map((val, index) => {
            genre.push(val.name)
        })
        genre = genre.join(', ');

        let production_countries = [];
        console.log()
        movie.production_countries.map((val, index) => {
            production_countries.push(val.name)
        })
        production_countries = production_countries.join(', ');

        const infoMovie = {
            genre_name: 'Genre: ',
            time_name: 'Running time: ',
            time_unit: ' min',
            country_name: 'Country: ',
            date_name: 'Premiere: ',
            tagline_name: 'Tagline: ',
        };


        return (
            <div className="single_movie">
                <div className="img_bg_single_movie"> <img src={imgBgURL + movie.poster_path} /></div>
                <div className="container_single_movie">
                    <h2 className='name_movie'> {movie.title}</h2>
                    <div className="movie_content">
                        <div className="movie_content_left">
                            <div className="movie_content_img_info"><img className="poster_single_movie" src={imgBaseURL + movie.poster_path} />
                                <div className="info_movie">
                                    <div className="rating_movie">{movie.vote_average.toFixed(1)}</div>
                                    <div className="genre_movie">{infoMovie.genre_name}<span className="pink">{genre}</span></div>
                                    <div className="runtime_movie">{infoMovie.time_name}<span className="white">{movie.runtime}{infoMovie.time_unit}</span></div>
                                    <div className="country_movie">{infoMovie.country_name}<span className="pink">{production_countries}</span></div>
                                    <div className="release_date_movie">{infoMovie.date_name}<span className="white">{movie.release_date}</span></div>
                                    <div className="tagline_movie">{infoMovie.tagline_name}<span className="pink">{movie.tagline}</span></div></div>
                            </div>
                            <p className="overview_movie" id="section-1">{movie.overview}</p>
                        </div>
                        <div className="movie_video"> <ReactVideoPlayer /></div>
                    </div >
                </div>
            </div >
        )
    };
}

export default SingleMovie;
