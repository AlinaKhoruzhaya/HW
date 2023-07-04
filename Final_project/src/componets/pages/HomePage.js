import { useEffect } from "react";
import MainSliderHome from "../layout/MainSliderHome.js";
import React from "react";


function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <MainSliderHome />
    )
}

export default Home;
