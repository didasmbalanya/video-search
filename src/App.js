import React, { Component } from "react";
import { SearchBar } from "./components/SearchBar";
import { youtube, KEY } from "./apis/youtube";
import { VideoList } from "./components/VideoList";
import { VideoDetails } from "./components/VideoDetails";

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: {},
  };
  handleSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  onSearchSubmit = async (term) => {
    const {
      data: { items },
    } = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });
    this.setState({ videos: items, selectedVideo: items[0] });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        videos: {this.state.videos.length}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onClick={this.handleSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
