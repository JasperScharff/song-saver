import React from "react";

function SongList(props) {
  console.log("SongList: ", props.songs);
  return (
    <div className="stylingForSongListDiv">
      <div className="newRow">
        {props.songs.map((song) => (
          <div key={song.name}>
            <tr className="items">
              <td className="songItem">{song.name}</td> 
              <td className="songItem">{song.artist}</td>
              <td className="songItem">{song.genre}</td> 
              <td className="songItem">{song.rating}</td>
                {/* {song.name} {song.artist} {song.genre} {song.rating} */}
              </tr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongList;
