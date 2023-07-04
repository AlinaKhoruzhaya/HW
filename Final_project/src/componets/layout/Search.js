import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import { HeaderSvgSearch } from "../svg/HeaderSvgSearch.tsx";


const baseSearchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';

function Search() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    async function fetchData(search = null) {

        axios.get(baseSearchURL, {
            params: {
                api_key: apiKey,
                query: search,
            }
        })
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    useEffect(() => {
        fetchData(search)
    }, []);

    const handleSearch = (event) => {
        event.preventDefault()
        fetchData(search)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/search/' + search);
    }

    if (error) {
        return (<div className="error"> <h2>{error}</h2> </div>)
    } else if (movies) {

        const items = movies.map((movie, index) =>
            <div key={index} className="movie">

                <Link to={"/movie/" + movie.id}><h2>{movie.title}</h2></Link>
            </div>
        );

        return (
            <div className="container">
                <form onSubmit={handleSubmit} onChange={handleSearch}>
                    <label>
                        <input
                            type="text"
                            value={search}
                            placeholder="Search..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <HeaderSvgSearch id="search" />
                        <input id='search_button' type="submit" value='S' />
                    </label>


                </form>
                <div className="search">{items}</div>
            </div>
        )
    }
}

export default Search;
