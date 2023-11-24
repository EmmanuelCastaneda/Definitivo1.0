import React from 'react';
import video4 from "../Pages/Pagesimg/4.mp4"

const Video4 = () => {
    return (
        <div className='video'>
            <video src={video4}autoPlay loop mute width="50%" height="50%"/>
        </div>
    );
}

export default Video4;