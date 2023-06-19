import { useEffect } from "react";
import MainSlider from "../layout/MainSlider.js";
import MainSliderBg from "../layout/MainSliderBg.js";

function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (



        < MainSlider />

    )
}

export default Home;
