import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import "swiper/css/free-mode";
import "swiper/css/thumbs";


const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500"

function MainSliderHome() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    async function fetchData() {
        axios.get(baseURL, {
            params: {
                api_key: apiKey,
                page: 1,
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
        fetchData()
    }, []);

    if (error) {
        return (<div className="error"> <h2>{error}</h2> </div>)
    } else if (movies) {

        const items = movies.map((movie, index) =>
            <SwiperSlide>
                <Link to={"/movie/" + movie.id}>
                    <img src={imgBaseURL + movie.poster_path} />
                    <h2>{movie.title}</h2>
                    <span>{movie.vote_average}</span>
                </Link>
            </SwiperSlide>
        );

        // const homeTitle = {
        //     part_first: 'new items',
        //     part_second: 'of this season',
        // }

        return (
            <>
                <Swiper
                    // style={{
                    //     "--swiper-navigation-color": "#fff",
                    //     "--swiper-pagination-color": "#fff",
                    // }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {items}
                </Swiper >

                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={40}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {items}
                </Swiper>
            </>
        );
    }
}

export default MainSliderHome;

