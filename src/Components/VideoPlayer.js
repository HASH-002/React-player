import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer(props) {

    return (
        <ReactPlayer
            className='react-player'
            url={props.url}
            width='50%'
            height='100vh'
            playing={true}
            muted={props.muted}
            controls={true}
        />
    );
}

export default VideoPlayer;