// VideoComponent.js
import React from 'react';

const VideoComponent = ({ src, width, height }) => (
  <video width={width} height={height} controls>
    <source src={src} type="video/mp4" />
  </video>
);

export default VideoComponent;
