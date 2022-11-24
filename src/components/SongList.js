import React from "react";

const stylingForSongListDiv = {
  fontSize: 20,
  //   lineHeight: 2,
  margin: 5,
};

const newRow = {
  color: "green",
  marginLeft: 150,
  marginRight: 40,
};

function SongList(props) {
  return (
    <div style={stylingForSongListDiv}>
      <span style={newRow}>{props.songs}</span>
      <span style={newRow}>{props.artists}</span>
      <span style={newRow}>{props.genres}</span>
      <span style={newRow}>{props.ratings}</span>
    </div>
  );
}

export default SongList;
