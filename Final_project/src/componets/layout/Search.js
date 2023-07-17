import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderSvgSearch } from "../svg/HeaderSvgSearch.tsx";

const baseSearchUrl = 'https://api.themoviedb.org/3/search/movie';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';

const style = {
    position: 'absolute',
    top: '110px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '60px',
    bgcolor: '#2B2B31',
    border: 'none',
    boxShadow: 'none',
    p: '10px',
};

function SearchPopUp() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();


    async function fetchData(search = null) {
        axios.get(baseSearchUrl, {
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

    const closeModal = () => {
        setOpen(false);
        setSearch('');
        setMovies([]);
    }

    const handleSearch = (event) => {
        event.preventDefault()
        fetchData(search)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/search/' + search);
        setSearch('');
    }

    if (error) {

        return (
            <div>
                <button onClick={handleOpen} ><HeaderSvgSearch id="search" /></button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <button onClick={closeModal}><HeaderSvgSearch id="search" /></button>

                        <form onChange={handleSearch}>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                        <div className="error"><h2>{error}</h2></div>
                    </Box>
                </Modal>
            </div>
        )

    } else if (movies) {
        const items = movies.map((movie, index) =>
            <div key={index} className="movie">
                <Link to={"/movie/" + movie.id} onClick={closeModal}><h2>{movie.title}</h2></Link>
            </div>
        );
        return (
            <div className="container">
                <button onClick={handleOpen}><HeaderSvgSearch id="search" /></button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <form onSubmit={handleSubmit} onChange={handleSearch}>
                            <label>
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </label>
                        </form>
                        <div className="search">{items}</div>
                    </Box>
                </Modal>
            </div>
        )
    }
}

export default SearchPopUp;
