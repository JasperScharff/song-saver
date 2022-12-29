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
    this.createSong = this.createSong.bind(this);
  }

  createSong = (input, songkey) => {
    console.log("SongForm", input);
    this.setState({
      [songkey]: input,
    });
  };

  render() {
    return (
      <div>
        <table style={{}}>
          <thead>
            <tr className="song-header">
              <th className="song-row__item">
                <input
                  type="text"
                  value={this.state.name}
                  name="songs"
                  placeholder="Song..."
                  onChange={(e) => this.createSong(e.target.value, "name")}
                ></input>
              </th>

              <th className="song-row__item">
                <input
                  type="text"
                  value={this.state.artist}
                  name="artists"
                  placeholder="Artist..."
                  onChange={(e) => this.createSong(e.target.value, "artist")}
                ></input>
              </th>

              <th className="song-row__item">
                <input
                  type="text"
                  value={this.state.genre}
                  name="songs"
                  placeholder="Genre..."
                  onChange={(e) => this.createSong(e.target.value, "genre")}
                ></input>
              </th>

              <th className="song-row__item">
                <input
                  type="text"
                  value={this.state.rating}
                  name="ratings"
                  placeholder="Rating..."
                  onChange={(e) => this.createSong(e.target.value, "rating")}
                ></input>
              </th>
            </tr>
          </thead>
        </table>
        <button onClick={() => this.props.addSong(this.state)}>Add Song</button>
        <div>
          <span className="title">Song</span>
          <span className="title">Artist</span>
          <span className="title">Genre</span>
          <span className="title">Rating</span>
        </div>
      </div>
    );
  }
}

export default SongForm;
