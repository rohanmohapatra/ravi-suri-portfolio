import { Button, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export function ReadMore(props) {
  const { classes, header, more, less, divider } = props;
  const [readMore, setReadMore] = useState(false);
  return (
    <Paper className={classes.paper}>
      {header}
      <Typography variant="h6" className={classes.more}>
        {more}
      </Typography>
      <AnimatePresence initial={false}>
        {readMore && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {divider ? (
              <Divider
                style={{ backgroundColor: "white", height: 2, marginTop: 10 }}
              />
            ) : null}
            <Typography variant="h6" className={classes.less}>
              {less}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
      <Grid container justify="center" style={{ paddingTop: 20 }}>
        <Button
          onClick={() => setReadMore(!readMore)}
          className={classes.button}
        >
          <Grid container justify="center">
            Read {!readMore ? "More" : "Less"}
            {!readMore ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </Grid>
        </Button>
      </Grid>
    </Paper>
  );
}
