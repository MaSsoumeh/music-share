import { useQuery } from "@apollo/client";
import { CircularProgress, useMediaQuery } from "@mui/material";
import React from "react";
import { GET_SONGS } from "../graphql/queries";
import Song from "./Song";

const SongList = () => {
  const { data, loading, error } = useQuery(GET_SONGS);
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <div style={{ marginBottom: !greaterThanMd && "140px" }}>
      {error && <div>Error while fetching songs</div>}
      {data && data.songs.map((song) => <Song key={song.id} song={song} />)}
    </div>
  );
};

export default SongList;
