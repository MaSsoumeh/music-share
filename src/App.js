import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import { Grid, Hidden, useMediaQuery } from "@mui/material";
function App() {
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  return (
    <>
      <Hidden only="xs">
        <Header />
      </Hidden>
      <Grid
        sx={{
          padding: greaterThanSm ? "80px 40px" : "40px 40px",
          background:
            "linear-gradient(225deg, hsla(289, 100%, 16%, 1) 5%, hsla(305, 85%, 65%, 1) 100%)",
        }}
        container
        spacing={3}
      >
        <Grid item xs={12} md={7}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          sx={
            greaterThanMd
              ? {
                  position: "fixed",
                  width: "100%",
                  top: 70,
                  right: 0,
                  p: 2,
                }
              : {
                  position: "fixed",
                  width: "100%",
                  bottom: 0,
                  right: 0,
                  padding: "0px !important",
                }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
