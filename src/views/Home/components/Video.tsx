import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Player, BigPlayButton, ControlBar } from "video-react";
import { useWidth } from "../../../components/useIsMobile";
import { pathName } from "../../../properties/properties";
import "./video-react.css";

const useStyles = makeStyles((theme) => ({
  video: {
    [theme.breakpoints.between(1280, 1380)]: {
      height: 400,
    },
  },
}));
export function Video() {
  const source = pathName + "/assets/home/ai.mp4";
  const width = useWidth();
  const fluid = width >= 1280 && width <= 1380 ? false : true;
  const height = width >= 1280 && width <= 1380 ? 600 : 0;

  return (
    <div>
      <Grid container justify="center">
        <Player src={source} autoPlay={true} fluid={fluid} height={height}>
          <ControlBar autoHide={false} className="my-class" />
          <BigPlayButton position="center" />
        </Player>
      </Grid>
    </div>
  );
}