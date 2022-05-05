import React from "react";
import Song from "./Song";
const song = {
  title: "Aurora",
  artist: "oDDling",
  thumbnail: "/assets/images/cardImg2.jpg",
};
const SongList = () => {
  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  );
};

export default SongList;
