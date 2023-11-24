import React from 'react';
import video2 from "../Pages/Pagesimg/2.mp4"

const Video2 = () => {
    return (
        <div className='video'>
            <video src={video2}autoPlay loop mute width="100%"/>
        </div>
    );
}

export default Video2;
