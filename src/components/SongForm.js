import React from "react";

// Inline h3
const inline = {
  display: "inline",
  margin: 85,
};

function SongForm(props) {
  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="song-header">
            <th className="song-row__item">
              
              <input
                type="text"
                value={props.songs}
                name="songs"
                placeholder="Song..."
                onChange={props.addSong}
              ></input>
            </th>

            <th className="song-row__item">
              <input
                type="text"
                value={props.artists}
                name="artists"
                placeholder="Artist..."
                onChange={props.addArtist}
              ></input>
            </th>

            <th className="song-row__item">
              <input
                type="text"
                value={props.genres}
                name="songs"
                placeholder="Genres..."
                onChange={props.addGenre}
              ></input>
            </th>

            <th className="song-row__item">
              <input
                type="text"
                value={props.ratings}
                name="ratings"
                placeholder="Rating..."
                onChange={props.addRating}
              ></input>
            </th>
          </tr>
        </thead>
      </table>
      <button onClick={props.addSong}>Add Song</button>

      <h3 style={inline}>Song</h3>
      <h3 style={inline}>Artist</h3>
      <h3 style={inline}>Genre</h3>
      <h3 style={inline}>Rating</h3>

    </div>
  );
}

export default SongForm;
