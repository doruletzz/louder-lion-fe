"use client";

import React, { useRef } from "react";
import ReactPlayer from "react-player";

const Player = () => {
  const ref = useRef<ReactPlayer>(null);

//   const handleSeekTo = (timestamp: string) => {
//     const all = timestamp.split(":");
//     const minutesInSeconds = Number.parseInt(all[0]) * 60;
//     const seconds = Number.parseInt(all[1]);

//     ref?.current?.seekTo(minutesInSeconds + seconds, "seconds");
//   };

  return (
    <ReactPlayer
      ref={ref}
    //   controls
      className="react-player"
      width="100%"
      height="100%"
      url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
    />
  );
};

export default Player;
