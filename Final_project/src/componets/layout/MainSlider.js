import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';


const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = 'a39a95f374f0c76df89723a2f2422478';
const imgBaseURL = "https://image.tmdb.org/t/p/w500"


function MainSlider() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);

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
                </Link>
            </SwiperSlide>
        );

        const homeTitle = {
            part_first: 'new items',
            part_second: 'of this season',
        }

        return (
            <div className='bg'>
                <div className='container'>
                    <div className='blok_content'>
                        <div className='blok_title'>
                            <span className='title_first_part'> {homeTitle.part_first}</span>
                            <span className='title_second_part'> {homeTitle.part_second}</span>
                        </div>

                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={40}
                            slidesPerView={4}
                            navigation
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {items}
                        </Swiper>
                    </div>
                </div>
            </div >
        );
    }
}

export default MainSlider;
