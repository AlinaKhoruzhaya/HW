import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";

const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500"

function MoviesList() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [page, setPage] = React.useState(1);
    const [total_pages, setTotalPages] = React.useState(100);

    async function fetchData(currentPage) {

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

        const items = movies.map((movie, index) =>
            <div key={index} className="movie">

                <img src={imgBaseURL + movie.poster_path} />

                <h2>{movie.title}</h2>
                <Link to={"/movie/" + movie.id}>More</Link>
            </div>
        );

        return (
            <div className="container">

                <div className="movies">{items}</div>

                <Stack spacing={10}>
                    <Typography> Page: {page}</Typography>
                    <Pagination count={total_pages} page={page} color="secondary" onChange={handleChange} />
                </Stack>

                {/* <Stack spacing={10}>
                    <Pagination count={10} />
                    <Pagination count={10} color="primary" />
                    <Pagination count={10} color="secondary" />
                    <Pagination count={10} disabled />
                </Stack> */}
            </div>
        )
    }
}

export default MoviesList;
