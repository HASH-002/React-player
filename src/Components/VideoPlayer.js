import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {

    return (
        <ReactPlayer
            className='react-player'
            url='Video1.mp4'
            width='50%'
            height='100vh'
            playing={true}
            muted={true}
            controls={true}
        />
    );
}

export default VideoPlayer;