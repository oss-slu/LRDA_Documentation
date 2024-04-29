import React from 'react';
import ReactPlayer from 'react-player';

const ReactPlayerWrapper = ({ url, ...props }) => {
    return <ReactPlayer url={url} {...props} />;
};

export default ReactPlayerWrapper;