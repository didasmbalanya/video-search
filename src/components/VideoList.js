import React from "react";
import { VideoItem } from "./VideoItem";

export const VideoList = ({ videos, onClick }) => {
  const rendered = videos.map((video) => (
    <VideoItem video={video} key={video.id.videoId} onClick={onClick}/>
  ));
  return <div className="ui relaxed divided list">{rendered}</div>;
};
