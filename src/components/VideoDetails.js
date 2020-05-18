import React from "react";

export const VideoDetails = ({ video }) => {
  const { snippet, id } = video;
  if (!video || !snippet) return null;
  return (
    <div>
      <div className="ui embed">
        <iframe
          title={snippet.title}
          src={`https://www.youtube.com/embed/${id.videoId}`}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{snippet.title}</h4>
        <p>{snippet.description}</p>
      </div>{" "}
    </div>
  );
};
