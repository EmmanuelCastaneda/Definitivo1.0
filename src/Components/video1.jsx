import React from 'react';
import video1 from "../Pages/Pagesimg/1.mp4"

const Video1 = () => {
    return (
        <div className='video'>
            <video src={video1}autoPlay loop mute width="100%" />
        </div>
    );
}

export default Video1;
