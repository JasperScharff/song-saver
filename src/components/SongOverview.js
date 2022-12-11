import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
    this.addSong = this.addSong.bind(this);
  }

  addSong = (song) => {
    this.setState({
      songs: song.target.value
    });
  };

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default SongOverview;
