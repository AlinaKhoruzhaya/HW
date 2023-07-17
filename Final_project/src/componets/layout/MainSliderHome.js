import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Controller } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import 'swiper/css/effect-fade';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, FreeMode, Thumbs, Controller, EffectFade } from 'swiper';

import Play_button from '../img/Play_button.svg';
import { ArrowHome } from '../svg/ArrowHome.tsx';



const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";
const imgBigURL = "https://image.tmdb.org/t/p/w1280";
const imgBgURL = "https://image.tmdb.org/t/p/original/";
const genresURL = 'https://api.themoviedb.org/3/genre/movie/list';

function MainSliderHome() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [genre_ids, setGenreIds] = useState([]);
    const [controlledSwiper, setControlledSwiper] = useState(null);


    async function fetchData() {
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
              <SwiperSlide>
            <Link to={"/movie/" + movie.id}>
              <img className='slide_img ' src={imgBaseURL + movie.poster_path}/>
              <div className="bg"></div>
              {genre}
              <img className="play_button" src={Play_button} alt='play'/>

            </Link>
            <Link to={"/movie/" + movie.id}><h2>{movie.title}</h2></Link>
            <p className="rating">{movie.vote_average.toFixed(1)}</p>
          </SwiperSlide>
          )
        });

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

        const linkBottom = {
            text_link: 'Watch all movies',
        }

        return (
            <div className='home-blok'> <div className='home'>
                <div className='wrapper_home'>

                    <div className='container container_home'>
                        <h1 className='home_title container'>
                            <span className='container'>{homeTitle.part_first}</span>{homeTitle.part_second}
                        </h1>
                        <div className='button_home container'>
                            <Link to={"/movies"}>
                                <button>{linkBottom.text_link} <ArrowHome id='arrow' /></button>
                            </Link>
                        </div>
                    </div>

                    <Swiper
                        slidesPerView={5}
                        spaceBetween={20}

                        navigation={true}
                        //thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                        // thumbs={{ swiper: thumbsSwiper }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.5': {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            '@0.75': {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            '@1.0': {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            '@1.25': {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}


                        modules={[FreeMode, Navigation, Thumbs, Controller]}
                        controller={{ control: controlledSwiper }}
                        className="mySwiper container container_home"
                    >
                        {items}

                    </Swiper >

                    <Swiper


                        // onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        effect={'fade'}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs, Controller, EffectFade]}
                        onSwiper={setControlledSwiper}


                        className="mySwiper2"
                    >
                        {itemsBg}

                    </Swiper>

                    <div className='bg_filter'></div>

                </div>
            </div ></div>


        );
    }
}

export default MainSliderHome;
