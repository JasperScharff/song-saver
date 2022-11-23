import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      artists: [],
      genres: [],
      ratings: [],
    };
  }

  addSong = (song) => {
    this.setState(prevState => {
            console.log("T");
    })
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
