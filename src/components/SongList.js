import React from "react";

function SongList(props) {
  return (
    <div>
      <p>{props.songs}</p>
      <p>{props.artists}</p>
      <p>{props.genres}</p>
      <p>{props.ratings}</p>
    </div>
  );
}

export default SongList;
