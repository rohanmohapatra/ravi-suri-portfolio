import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import { useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

export function WorkExperience() {
  const { scrollYProgress } = useViewportScroll();
  const scrollRange = [0, 0.16, 0.33, 0.5, 0.664, 0.83, 1];
  const opacity = {
    one: useTransform(scrollYProgress, scrollRange, [0, 1, 1, 1, 1, 1, 1]),
    two: useTransform(scrollYProgress, scrollRange, [0, 0, 1, 1, 1, 1, 1]),
    three: useTransform(scrollYProgress, scrollRange, [0, 0, 0, 1, 1, 1, 1]),
    four: useTransform(scrollYProgress, scrollRange, [0, 0, 0, 0, 1, 1, 1]),
    five: useTransform(scrollYProgress, scrollRange, [0, 0, 0, 0, 0, 1, 1]),
    six: useTransform(scrollYProgress, scrollRange, [0, 0, 0, 0, 0, 0, 1]),
  };
  return (
    <Timeline>
      <motion.div style={{ opacity: opacity.one }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
      </motion.div>

      <motion.div style={{ opacity: opacity.two }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Get Up</TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div style={{ opacity: opacity.three }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div style={{ opacity: opacity.four }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div style={{ opacity: opacity.five }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
      </motion.div>
      <motion.div style={{ opacity: opacity.six }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Get up</TimelineContent>
        </TimelineItem>
      </motion.div>
    </Timeline>
  );
}
