import React from 'react';

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import youtube from "../apis/youtube";

class App extends React.Component {

    state = {
        videos: [],
        allvids: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onTermSubmit('cats');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            allvids: response.data.items,
            videos: response.data.items,

            selectedVideo: response.data.items[0]
        });

        console.log(this.state.allvids, this.state.videos)

    }

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video,
            videos: this.state.allvids
        }, ()=> {
            this.setState({
                videos:this.state.videos.filter(video=>video.id.videoId!==this.state.selectedVideo.id.videoId)
            })
        })
    };
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
