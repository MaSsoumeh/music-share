import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { Avatar, Typography } from "@mui/material";
import React from "react";
const song = {
  title: "Aurora",
  artist: "oDDling",
  thumbnail: "/assets/images/audio.jpg",
};
const PlayList = () => {
  return (
    <div style={{ margin: "10px 0" }}>
      <Typography
        variant="button"
        color="secondary"
        sx={{ fontWeight: "bold" }}
      >
        Play list (5)
      </Typography>
      {Array.from({ length: 5 }, () => song).map((song, i) => (
        <QueuedSong key={i} song={song} />
      ))}
    </div>
  );
};
export default PlayList;
const QueuedSong = ({ song }) => {
  const { title, artist, thumbnail } = song;
  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "column",
        gridTemplateColumns: "50px auto 50px",
        gridGap: 12,
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <Avatar src={thumbnail} sx={{ width: "45px", height: "45px" }} />
      <div sx={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <Typography variant="subtitle2" sx={{ overflowWrap: "anywhere" }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="#ebeaef"
          sx={{ overflowWrap: "anywhere" }}
        >
          {artist}
        </Typography>
      </div>
      <DeleteTwoToneIcon
        color="secondary"
        sx={{ width: "30px", height: "30px" }}
      />
    </div>
  );
};
