import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Play_button from '../img/Play_button.svg';


const baseURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500"
const genresURL = 'https://api.themoviedb.org/3/genre/movie/list';


const WishList = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [genre_ids, setGenreIds] = useState([]);

    async function fetchData(id) {
        axios.get(genresURL, {
            params: {
                api_key: apiKey,
            }
        })
            .then(response => {
                setGenreIds(response.data.genres);
            })
            .catch(error => {
                setError(error.message);
            })

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
            let genre = [];
            let genreIds = movie.genres;
            for (let i = 0; i < genreIds.length; i++) {
                let id = genreIds[i].id;
                for (let q = 0; q < genre_ids.length; q++) {
                    let api_id = genre_ids[q].id
                    if (id === api_id) {
                        genre.push(genre_ids[q].name);
                    }
                }
            }
            const wishList_text = {
                genre_name: 'Genre: ',
            }
            genre = genre.join(', ');
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
                        <div className="genre_movie">{wishList_text.genre_name}<span className="pink">{genre}</span></div>
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
                <div className="container container_wish_list">
                    <h2 className='title_wish_list'> {wishList.title}</h2>
                    <div className="movies_wish_list">{items}</div>
                </div>
            </div>
        );
    }
}

export default WishList;
