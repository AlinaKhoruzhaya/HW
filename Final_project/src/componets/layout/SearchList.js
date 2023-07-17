import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Play_button from '../img/Play_button.svg'

const baseSearchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";
const genresURL = 'https://api.themoviedb.org/3/genre/movie/list';

function SearchList() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [page, setPage] = React.useState(1);
    const [total_pages, setTotalPages] = React.useState(100);
    const params = useParams();
    const query = params.query;
    const [search, setSearch] = useState(query);
    const [genre_ids, setGenreIds] = useState([]);

    async function fetchData(currentPage, search = null) {
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

        axios.get(baseSearchURL, {
            params: {
                api_key: apiKey,
                page: currentPage,
                query: search,
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

    useEffect(() => {
        fetchData(page, search)
    }, []);

    const handleChange = (event, value) => {
        setPage(value);
        fetchData(value, search);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchData(page, search)
    }

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
            <div key={index} className="movie_search_list">
                <div className="wrapper_img_search_list">
                    <Link to={"/movie/" + movie.id}> <img className="poster_search_list"
                                                          src={imgBaseURL + movie.poster_path}/></Link>
                    <Link to={"/movie/" + movie.id}>
                        <div className="bg_search_list"></div>
                    </Link>
                    <Link to={"/movie/" + movie.id}> <img className="play_button" src={Play_button} alt='play'/></Link>
                </div>
                {genre}
                <div className="card_content_search_list">
                    <Link to={"/movie/" + movie.id}><h2>{movie.title}</h2></Link>
                    <p className="rating">{movie.vote_average.toFixed(1)}</p>
                </div>
            </div>
            )
        });

        const titleSearchList = {
            part_first: 'search ',
            part_second: 'results',
        }

        return (
            <div className="bg_search_list">
                <div className="container">
                    <div className="title_movies_search_list">
                        <span className='title_movies_first_part'> {titleSearchList.part_first}</span>
                        <span className='title_movies_second_part'> {titleSearchList.part_second}</span>
                    </div>
                    <div className="movies_search_list">{items}</div>
                    <div className="pagination">
                        <Stack spacing={10}>
                            <Pagination count={total_pages} page={page} color="standard" onChange={handleChange} />
                        </Stack>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchList;
