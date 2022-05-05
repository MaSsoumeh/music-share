import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import PlayCircleTwoToneIcon from "@mui/icons-material/PlayCircleTwoTone";
import SaveAltTwoToneIcon from "@mui/icons-material/SaveAltTwoTone";
const Song = ({ song }) => {
  const { title, artist, thumbnail } = song;
  return (
    <Card
      sx={{
        display: "flex",
        mt: 2,
        borderRadius: "30px",
        paddingRight: 2,
        backgroundColor: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(40px)",
      }}
    >
      <CardMedia
        image={thumbnail}
        sx={{ width: "160px", height: "140px", objectFit: "cover" }}
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
          <Typography variant="body1" component="p" color="#ebeaef">
            {artist}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <PlayCircleTwoToneIcon
              color="secondary"
              sx={{ width: "30px", height: "30px" }}
            />
          </IconButton>
          <IconButton style={{ marginLeft: "32px" }}>
            <SaveAltTwoToneIcon
              color="secondary"
              sx={{ width: "30px", height: "30px" }}
            />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};
export default Song;
