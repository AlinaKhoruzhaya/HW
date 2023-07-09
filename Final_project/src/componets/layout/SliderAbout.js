import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import * as React from 'react';

function SliderAbout() {

    const titlePage = {
        title: 'Roadmap',
    }

    const contentFirstSectionSlider = {
        title: '2023 Q4',
        text_section_first: 'Conduct market research on movies and TV series, study the needs and preferences of the target audience.',
        text_section_second: 'Determine the main goals and objectives of the site: providing content, functionality and design.',
    }

    const contentSecondSectionSlider = {
        title: '2024 Q1',
        text_section_first: 'Create an information architecture for the site, defining the main sections and content categories.',
        text_section_second: 'Development of an attractive and intuitive site design, providing easy navigation and high user interactivity.',
    }

    const contentThirdSectionSlider = {
        title: '2024 Q2',
        text_section_first: 'Creating a database for movies and TV series including information on title, genre, actors, ratings and reviews.',
        text_section_second: 'Development of a powerful search engine which will allow users to easily find films and TV series.',
    }

    const contentFourthSectionSlider = {
        title: '2024 Q3',
        text_section_first: 'Developing a user registration and authorization system to create personal accounts.',
        text_section_second: 'Implementation of the ability to save films or series in the "Favorites" list, leave reviews and ratings.',
    }

    const contentFifthSectionSlider = {
        title: '2024 Q4',
        text_section_first: 'Protection of user data, applying appropriate security protocols.',
        text_section_second: 'Testing the site on different devices and browsers, fixing bugs and improving performance.',
    }

    return (
        <div className='about_section_third_bg'>
            <div className='container'>
                <h2>{titlePage.title}</h2>
                <div className='bg_swiper_about'>
                    <Swiper
                        rewind={true}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={40}
                        slidesPerView={3}
                        navigation
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className='wrapper_slider_about'>
                                <h4>{contentFirstSectionSlider.title}</h4>
                                <span className='pink_round'></span>
                                <div className='pink_round_left'>{contentFirstSectionSlider.text_section_first}</div>
                                <div className='pink_round_left'>{contentFirstSectionSlider.text_section_second}</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> <div className='wrapper_slider_about'>
                            <h4>{contentSecondSectionSlider.title}</h4>
                            <span className='pink_round'></span>
                            <div className='pink_round_left'>{contentSecondSectionSlider.text_section_first}</div>
                            <div className='pink_round_left'>{contentSecondSectionSlider.text_section_second}</div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className='wrapper_slider_about'>
                            <h4>{contentThirdSectionSlider.title}</h4>
                            <span className='white_round'></span>
                            <div className='white_round_left'>{contentThirdSectionSlider.text_section_first}</div>
                            <div className='white_round_left'>{contentThirdSectionSlider.text_section_second}</div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className='wrapper_slider_about'>
                            <h4>{contentFourthSectionSlider.title}</h4>
                            <span className='white_round'></span>
                            <div className='white_round_left'>{contentFourthSectionSlider.text_section_first}</div>
                            <div className='white_round_left'>{contentFourthSectionSlider.text_section_second}</div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className='wrapper_slider_about'>
                            <h4>{contentFifthSectionSlider.title}</h4>
                            <span className='white_round'></span>
                            <div className='white_round_left'>{contentFifthSectionSlider.text_section_first}</div>
                            <div className='white_round_left'>{contentFifthSectionSlider.text_section_second}</div>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default SliderAbout;
