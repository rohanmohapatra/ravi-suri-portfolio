import { Grid } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import { useWidth } from "../../../components/useIsMobile";
import { pathName } from "../../../properties/properties";

// const useStyles = makeStyles((theme) => ({
//   video: {
//     [theme.breakpoints.between(1280, 1380)]: {
//       height: 400,
//     },
//   },
// }));
export function Video() {
  const source = pathName + "/assets/home/ravi-suri-video.mp4";
  const width = useWidth();
  let height: number;
  // width >= 1200 && width <= 1380 ? 650 : 0;
  switch (true) {
    case width >= 1280 && width <= 1380:
      height = 650;
      break;
    case width < 1280 && width >= 1000:
      height = 400;
      break;
    case width < 600:
      height = 200;
      break;
    default:
      height = 700;
      break;
  }
  return (
    <div>
      <Grid container justify="center">
        <ReactPlayer
          url={source}
          playing={false}
          loop={false}
          controls={true}
          height={height}
          width={width}
        />
      </Grid>
    </div>
  );
}
