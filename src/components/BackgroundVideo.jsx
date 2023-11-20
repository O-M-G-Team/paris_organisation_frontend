import React from 'react';
import '../styles/backgroundvideo.css';

const BackgroundVideo = ({ videoSource }) => {
    return (
        <div className="video-background">
            <video autoPlay="autoplay" loop="loop" muted>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
