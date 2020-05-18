import React from "react";
import "./VideoItem.css";

export const VideoItem = ({ video, onClick }) => {
  const { snippet } = video;
  return (
    <div
      className="item video-item"
      onClick={() => {
        console.log("clicked");
        onClick(video);
      }}
    >
      <img className="ui image" alt={snippet.title} src={snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  );
};
