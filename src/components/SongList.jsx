import { useMediaQuery } from "@mui/material";
import React from "react";
import Song from "./Song";
const song = {
  title: "Aurora",
  artist: "oDDling",
  thumbnail: "/assets/images/cardImg2.jpg",
};
const SongList = () => {
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  console.log(greaterThanMd);
  return (
    <div style={{ marginBottom: !greaterThanMd && "140px" }}>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  );
};

export default SongList;
