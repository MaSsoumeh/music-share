import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Slider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import PlayList from "./PlayList";

const song = {
  title: "Aurora",
  artist: "oDDling",
  thumbnail: "/assets/images/cardImg2.jpg",
};
const SongPlayer = () => {
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "35px",
          backgroundColor: "rgba(255,255,255,0.4)",
          backdropFilter: "blur(40px)",
          margin: "0px !important",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0px 15px",
            width: "60%",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h3">
              Title
            </Typography>
            <Typography variant="subtitle1" component="p">
              Artist
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton>
                <FastRewindRounded />
              </IconButton>
              <IconButton>
                <PlayArrowRounded sx={{ width: "38px", height: "38px" }} />
              </IconButton>
              <IconButton>
                <FastForwardRounded />
              </IconButton>
              <Typography variant="subtitle1" component="p" color="secondary">
                00:01:30
              </Typography>
            </div>
            <Slider
              type="range"
              min={0}
              max={1}
              step={0.01}
              color="secondary"
            />
          </CardContent>
        </div>
        <CardMedia image={song.thumbnail} sx={{ width: "130px" }} />
      </Card>
      {greaterThanMd && <PlayList />}
    </>
  );
};

export default SongPlayer;
