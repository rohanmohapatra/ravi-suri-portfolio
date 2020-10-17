import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  image: {
    background: `no-repeat center`,
    backgroundSize: "cover",
    height: 600,
    [theme.breakpoints.between(1280, 1380)]: {
      height: 500,
    },
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
}));

export function GalleryImage(props) {
  const { src } = props;
  const [loaded, setLoaded] = useState(false);
  const classes = useStyles();
  return (
    <>
      {!loaded && (
        <img
          src={src}
          onLoad={() => {
            setLoaded(true);
          }}
          style={{ visibility: "hidden" }}
        />
      )}
      {!loaded ? (
        <div className={classes.image}>
          <Skeleton variant="rect" height={600} />
        </div>
      ) : (
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      )}
    </>
  );
}
