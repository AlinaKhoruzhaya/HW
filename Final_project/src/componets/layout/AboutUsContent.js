import * as React from 'react';
import { Link } from "react-router-dom";
import Screen from "../img/About_us/Screen.svg";
import Tape from "../img/About_us/Tape.svg";
import Tv from "../img/About_us/Tv.svg";
import Airplay from "../img/About_us/Airplay.svg";
import Language from "../img/About_us/Language.svg";
import Ticket from "../img/About_us/Ticket.svg";
import SliderAbout from './SliderAbout';
import NavAbout from '../nav/NavAboutPartners'


const AboutUs = () => {

    const AboutUsNav = {
        title_page: 'About Us',
        link_home: 'Home',
    };

    const AboutUsText = {
        title_name: 'flixgo',
        title: ' – Best Place for Movies',
        section_first: 'Welcome to FlixGo movie site, the ultimate destination for all film enthusiasts. Immerse yourself in a world of captivating stories, stunning visuals, and unforgettable performances. Explore our extensive library of movies, spanning across genres, eras, and cultures.',
        section_second: 'Indulge in the joy of cinema with our curated collections, featuring handpicked movies grouped by themes, directors, or actors. Dive into the world of cinematic magic and let yourself be transported to new realms of imagination and emotion.',
    };

    const Advantages = {
        name_section_first: 'Ultra HD',
        content_section_first: 'Experience movies like never before with our Ultra HD feature. Immerse yourself in stunning visuals, vibrant colors, and crystal-clear detail.',
        name_section_second: 'Early access to new items',
        content_section_second: 'Be the first to experience the latest movies and exclusive content with our Early Access feature. Get a sneak peek into upcoming releases, gain access to special screenings, and stay ahead of the curve.',
        name_section_third: 'Large movie database',
        content_section_third: 'Discover a vast and diverse collection of movies in our extensive database. With thousands of titles to choose from, you\'ll never run out of options.',
        name_section_fourth: 'Airplay',
        content_section_fourth: 'Seamlessly stream movies from your device to the big screen with Airplay integration. Experience the cinematic magic in the comfort of your living room and share the excitement with friends and family.',
        name_section_fifth: 'Online TV',
        content_section_fifth: 'Expand your entertainment horizons with our Online TV. Stream live TV channels, catch up on your favorite shows, and enjoy a wide range of television content online.',
        name_section_sixth: 'Multi language subtitles',
        content_section_sixth: 'Break language barriers and enjoy movies from around the world with our multi-language subtitles. Explore different cultures, expand your cinematic horizons, and appreciate the beauty of global cinema.',
    }

    const SectionSecond = {
        name_section: 'How It Works',
        number_first_column: '01',
        title_first_column: 'Create an account',
        text__first_column: 'Start your movie-watching journey by creating a personalized account on our platform. Sign up easily and gain access to a world of entertainment.',
        number_second_column: '02',
        title_second_column: 'Choose your plan',
        text__second_column: 'Select the perfect plan that suits your preferences and watching habits. We offer a range of subscription options from basic plans to premium plans.',
        number_third_column: '03',
        title_third_column: 'Enjoy FlixGo',
        text__third_column: 'Immerse yourself in the world of FlixGo, where unlimited movie streaming awaits. With our vast collection of movies there\'s something for everyone.',
    }

    const SectionFourth = {
        name_section: 'Our Partners',
        text: 'We strive for long-term cooperation with our partners, and our team is always ready to meet and consider new opportunities for mutual benefits. If you would like to become our partner, we are always open to new offers and look forward to hearing from you.',
        link: ' Become a partner',
    }

    return (
        <div className="wrapper_about">
            < div className="about_top">
                <div className='about_top_content container'>
                    <h1>{AboutUsNav.title_page}</h1>
                    <div className='navigation_about'>
                        <Link to={"/"}>
                            <span className='link_home'>{AboutUsNav.link_home}</span>
                        </Link>
                        <span >{AboutUsNav.title_page}</span>
                    </div>
                </div>
            </div>
            <div className='about_section_first_bg'>
                <div className='container'>
                    <div className='about_section_first'>
                        <h2><span>{AboutUsText.title_name}</span>{AboutUsText.title}</h2>
                        <div className='about_section_first_text'>{AboutUsText.section_first}</div>
                        <div className='about_section_first_text'>{AboutUsText.section_second}</div>
                        <div>
                            <div className='line'>
                                <div className='blok'>
                                    <div className='img'><img src={Screen} alt="screen" /></div>
                                    <div className='content'>
                                        <div className='title'>{Advantages.name_section_first}</div>
                                        <div className='text'>{Advantages.content_section_first}</div>
                                    </div>
                                </div>
                                <div className='blok'>
                                    <div className='img'><img src={Tape} alt="tape" /></div>
                                    <div className='content'>
                                        <div className='title'>{Advantages.name_section_third}</div>
                                        <div className='text'>{Advantages.content_section_third}</div>
                                    </div>
                                </div>
                                <div className='blok'>
                                    <div className='img'><img src={Tv} alt="tv" /></div>
                                    <div className='content'>
                                        <div className='title'>{Advantages.name_section_fifth}</div>
                                        <div className='text'>{Advantages.content_section_fifth}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='blok'>
                                    <div className='img'><img src={Ticket} alt="Ticket" /></div>
                                    <div className='content'>
                                        <div className='title'>{Advantages.name_section_second}</div>
                                        <div className='text'>{Advantages.content_section_second}</div>
                                    </div>
                                </div>
                                <div className='blok'>
                                    <div className='img'><img src={Airplay} alt="Airplay" /></div>
                                    <div className='content'>
                                        <div className='title'>{Advantages.name_section_fourth}</div>
                                        <div className='text'>{Advantages.content_section_fourth}</div>
                                    </div>
                                </div>
                                <div className='blok'>
                                    <div className='img'><img src={Language} alt="Language" /></div>
                                    <div className='content'>
                                        <div className='title'>{Advantages.name_section_sixth}</div>
                                        <div className='text'>{Advantages.content_section_sixth}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about_section_second_bg'>
                <div className='container'>
                    <h2>{SectionSecond.name_section}</h2>
                    <div className='about_section_second_content'>
                        <div className='column'>
                            <div className='number'>{SectionSecond.number_first_column}</div>
                            <h3>{SectionSecond.title_first_column}</h3>
                            <div className='text'>{SectionSecond.text__first_column}</div>
                        </div>
                        <div className='column'>
                            <div className='number'>{SectionSecond.number_second_column}</div>
                            <h3>{SectionSecond.title_second_column}</h3>
                            <div className='text'>{SectionSecond.text__second_column}</div>
                        </div>
                        <div className='column'>
                            <div className='number'>{SectionSecond.number_third_column}</div>
                            <h3>{SectionSecond.title_third_column}</h3>
                            <div className='text'>{SectionSecond.text__third_column}</div>
                        </div>
                    </div>
                </div>
            </div>
            <SliderAbout />
            <div className='about_section_fourth_bg'>
                <div className='container'>
                    <h2>{SectionFourth.name_section}</h2>
                    <div className='text'>{SectionFourth.text}<Link to={"/"}>{SectionFourth.link}</Link></div>
                    <div className='bg_nav_partners'>
                        <NavAbout />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;
