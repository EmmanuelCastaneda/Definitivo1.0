import React from 'react';
import video3 from "../Pages/Pagesimg/3.mp4"

const Video3 = () => {
    return (
        <div className='video'>
            <video src={video3}autoPlay loop mute width="100%"/>
        </div>
    );
}

export default Video3;
