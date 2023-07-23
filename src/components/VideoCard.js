import React from "react";

const VideoCard = ({ info }) => {
  console.log(info.snippet);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  //   console.log(info);
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img alt="video" className="rounded-lg" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
