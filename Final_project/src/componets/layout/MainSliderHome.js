import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Play_button from '../img/Play_button.svg'


const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";
const imgBigURL = "https://image.tmdb.org/t/p/w1280";
const imgBgURL = "https://image.tmdb.org/t/p/original/";


function MainSliderHome() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);


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
                    <img className='slide_img ' src={imgBaseURL + movie.poster_path} />
                    <div className="bg"></div>
                    <img className="play_button" src={Play_button} alt='play' />

                </Link>
                <Link to={"/movie/" + movie.id}><h2>{movie.title}</h2></Link>
                <p className="rating">{movie.vote_average.toFixed(1)}</p>
            </SwiperSlide>
        );

        const itemsBg = movies.map((movie, index) =>
            <SwiperSlide>
                <Link to={"/movie/" + movie.id}>
                    <img className='bg_img' src={imgBgURL + movie.poster_path} />
                </Link>
            </SwiperSlide>
        );

        const homeTitle = {
            part_first: 'new items ',
            part_second: 'of this season',
        }

        return (
            <div className='wrapper_home'>

                <div className='container'>
                    <h1 className='home_title '>
                        <span >{homeTitle.part_first}</span>{homeTitle.part_second}
                    </h1>

                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation={true}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper container"
                >
                    {items}

                </Swiper >

                <Swiper
                    spaceBetween={10}
                    onSwiper={setThumbsSwiper}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 "
                >
                    {itemsBg}

                </Swiper>
                <div className='bg_filter'></div>
            </div>
        );
    }
}

export default MainSliderHome;
