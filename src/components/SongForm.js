import React, { Component } from "react";

class SongForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      artist: "",
      genre: "",
      rating: "",
    };
    this.addSong = this.addSong.bind(this);
  }

  addSong = (song) => {
    // alert("Clicked")

    this.setState({ songs: song.target.value });
  };

  render() {
    return (
      <div>
        <table style={{ width: "100%" }}>
          <thead>
            <tr className="song-header">
              <th className="song-row__item">
                <input
                  type="text"
                  value={this.state.name}
                  name="songs"
                  placeholder="Song..."
                  onChange={this.addSong}
                ></input>
              </th>

              <th className="song-row__item">
                <input
                  type="text"
                  value={this.state.artist}
                  name="artists"
                  placeholder="Artist..."
                  onChange={this.state.artist}
                ></input>
              </th>

              <th className="song-row__item">
                <input
                  type="text"
                  value={this.state.genre}
                  name="songs"
                  placeholder="Genres..."
                  onChange={this.state.genre}
                ></input>
              </th>

              <th className="song-row__item">
                <input
                  type="text"
                  value={this.state.rating}
                  name="ratings"
                  placeholder="Rating..."
                  onChange={this.state.rating}
                ></input>
              </th>
            </tr>
          </thead>
        </table>
        <button onClick={this.addSong}>Add Song</button>
      </div>
    );
  }
}

export default SongForm;
