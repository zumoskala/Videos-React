import React from 'react';
import './VideoItem.css';

const VideoItem = ({video}) => {
    return (
        <div className={'video-item item'}>
            <img src={video.snippet.thumbnails.medium.url} className={'ui image'}/>
            <div className={'content'}>
                <div className={'header'} dangerouslySetInnerHTML={{__html: video.snippet.title}}></div>
                <div className={'description'}>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoItem;
