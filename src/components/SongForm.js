import React from "react";

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
              ></input>
            </th>
            <th className="song-row__item">
              <input type="text" placeholder="Artist"></input>
            </th>
            <th className="song-row__item">
              <input type="text" placeholder="Genre"></input>
            </th>
            <th className="song-row__item">
              <input type="text" placeholder="Rating"></input>
            </th>
          </tr>
        </thead>
      </table>
      <button onClick={props.addSong}>Add Song</button>
    </div>
  );
}

export default SongForm;
