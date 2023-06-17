import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = 'About us';
    }, []);

    return (
        <div> About Page</div>
    )
}

export default About;
