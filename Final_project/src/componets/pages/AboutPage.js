import { useEffect } from "react";
import AboutUsContent from '../layout/AboutUsContent';

function About() {
    useEffect(() => {
        document.title = 'About us';
    }, []);

    return (
        <AboutUsContent />
    )
}

export default About;
