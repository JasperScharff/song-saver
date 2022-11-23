import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: ["f "],
      artists: [" "],
      genres: [" "],
      ratings: [" "],
    };
    this.addSong = this.addSong.bind(this);
  }

  addSong = (song) => {
    // console.log("OK")
    this.setState({
      songs: song.target.value,
    });
  };

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <SongList addSong={this.addSong} />
      </div>
    );
  }
}

export default SongOverview;
