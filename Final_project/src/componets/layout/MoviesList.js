import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import Play_button from '../img/Play_button.svg'


const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";
const genresURL = 'https://api.themoviedb.org/3/genre/movie/list';

function MoviesList() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [page, setPage] = React.useState(1);
    const [total_pages, setTotalPages] = React.useState(100);
    const [genre_ids, setGenreIds] = useState([]);

    async function fetchData(currentPage) {
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


        axios.get(baseURL, {
            params: {
                api_key: apiKey,
                page: currentPage,
            }
        })
            .then(response => {
                setMovies(response.data.results);

                let totalPages = response.data.total_pages;
                if (totalPages && totalPages <= 500) {
                    setTotalPages(totalPages);
                } else {
                    setTotalPages(500);
                }
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleChange = (event, value) => {
        setPage(value);
        fetchData(value);
    };

    useEffect(() => {
        fetchData(page)
    }, []);

    if (error) {
        return (<div className="error"> <h2>{error}</h2> </div>)
    } else if (movies) {


        const items = movies.map((movie, index) => {
            let genre = [];
            let genreIds = movie.genre_ids;

            for (let i = 0; i < genreIds.length; i++) {
                let id = genreIds[i];
                for (let q = 0; q < genre_ids.length; q++) {
                    let api_id = genre_ids[q].id
                    if (id === api_id) {
                        genre.push(genre_ids[q].name);
                    }
                }
            }

            genre = genre.join(', ');
            return (
                <div key={index} className="movie">
                    <div className="wrapper_img">
                        <Link to={"/movie/" + movie.id}>
                            <img className="poster_movies_list" src={imgBaseURL + movie.poster_path} />
                            <div className="bg"></div>
                        </Link>

                        <Link to={"/movie/" + movie.id}>  <img className="play_button" src={Play_button} alt='play' />
                        </Link>

                    </div>

                    <div className="card_content">
                        <Link to={"/movie/" + movie.id}><h2>{movie.title}</h2></Link>
                        <p className="genre">{genre}</p>
                        <p className="rating">{movie.vote_average}</p>
                    </div>
                </div >
            )
        });

        const titleMovies = {
            part_first: 'watch',
            part_second: 'online',
        }

        return (
            <div className="bg">
                <div className="container">
                    <div className="title_movies">
                        <span className='title_movies_first_part'> {titleMovies.part_first}</span>
                        <span className='title_movies_second_part'> {titleMovies.part_second}</span>
                    </div>
                    <div className="movies">{items}</div>
                    <div className="pagination">
                        <Stack spacing={0}>
                            <Pagination count={total_pages} page={page} color='standard' onChange={handleChange} />
                        </Stack>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesList;
