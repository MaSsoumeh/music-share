import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PlayCircleTwoToneIcon from "@mui/icons-material/PlayCircleTwoTone";
import SaveAltTwoToneIcon from "@mui/icons-material/SaveAltTwoTone";
import React from "react";
const song = {
  title: "Aurora",
  artist: "oDDling",
  thumbnail: "/assets/images/cardImg2.jpg",
};
const SongList = () => {
  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song) => (
        <Song song={song} />
      ))}
    </div>
  );
};

export default SongList;

const Song = ({ song }) => {
  const { title, artist, thumbnail } = song;
  return (
    <Card
      sx={{
        display: "flex",
        mt: 2,
        borderRadius: "30px",
        paddingRight: 2,
        background:
          "linear-gradient(135deg, hsla(274, 63%, 80%, 1) 0%, hsla(273, 89%, 64%, 1) 100%)",
      }}
    >
      <CardMedia
        image={thumbnail}
        sx={{ width: "140px", height: "140px", objectFit: "cover" }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" component="p" color="gray">
            {artist}
          </Typography>
        </CardContent>
        <CardActions>
          <PlayCircleTwoToneIcon color="secondary" />
          <SaveAltTwoToneIcon
            color="secondary"
            style={{ marginLeft: "32px" }}
          />
        </CardActions>
      </div>
    </Card>
  );
};
