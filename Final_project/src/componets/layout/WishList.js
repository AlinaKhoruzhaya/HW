import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Play_button from '../img/Play_button.svg';


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
                <div key={index} className="movie_wish_list">
                    <div className="wrapper_img">
                        <Link to={"/movie/" + movie.id}>
                            <img className="poster_wish_list" src={imgBaseURL + movie.poster_path} />
                            <div className="bg"></div>
                        </Link>
                        <Link to={"/movie/" + movie.id}>  <img className="play_button" src={Play_button} alt='play' />
                        </Link>
                    </div>

                    <div className="card_content">
                        <Link to={"/movie/" + movie.id}><h2>{movie.title}</h2></Link>
                        <div className="rating_wish_list">{movie.vote_average.toFixed(1)}</div>
                        <div className="overview_wish_list" id="section-1">{movie.overview}</div>
                    </div>
                </div>)
        });

        const wishList = {
            title: 'Favorites',
        }
        return (
            <div className="bg_wish_list">
                <div className="container">
                    <h2 className='title_wish_list'> {wishList.title}</h2>
                    <div className="movies_wish_list">{items}</div>
                </div>
            </div>
        );
    }
}

export default WishList;
