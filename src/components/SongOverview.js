import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [""],
      artists: [""],
      genres: [""],
      ratings: [""],
    };
    this.addSong = this.addSong.bind(this);
  }

  addSong = (song) => {
    this.setState({
      songs: song.target.value,
    });
  };
  addArtist = (artist) => {
    this.setState({
      artists: artist.target.value,
    });
  };
  addGenre = (genre) => {
    this.setState({
      genres: genre.target.value,
    });
  };
  addRating = (rating) => {
    this.setState({
      ratings: rating.target.value,
    });
  };

  render() {
    return (
      <div>
        <SongForm
          addSong={this.addSong}
          addArtist={this.addArtist}
          addGenre={this.addGenre}
          addRating={this.addRating}
        />
        <SongList
          songs={this.state.songs}
          artists={this.state.artists}
          genres={this.state.genres}
          ratings={this.state.ratings}
        />
      </div>
    );
  }
}

export default SongOverview;
