import { useEffect } from "react";
// import MainSlider from "../layout/MainSlider.js";
import MainSliderHome from "../layout/MainSliderHome.js";
import React from "react";


function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <MainSliderHome />)

}

export default Home;
