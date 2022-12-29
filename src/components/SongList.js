import React from "react";

function SongList(props) {
  console.log("SongList: ", props.songs);
  return (
    <div className="stylingForSongListDiv">
      <div className="newRow">
        {props.songs.map((song) => (
          <div key={song.name}>
            <span className="items">
              <span>{song.name}</span> 
              <span>{song.artist}</span>
              <span>{song.genre}</span> 
              <span>{song.rating}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongList;
