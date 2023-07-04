import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import IntroVideo from '../videos/Video.mp4'
import Poster from '../img/Single_movie/Poster_video.jpg'


const ReactVideoPlayer = () => {
    return (
        <Video loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster={Poster}
            onCanPlayThrough={() => {
            }}>
            <source src={IntroVideo} type='video/webm' />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
        </Video>
    );
};

export default ReactVideoPlayer;
