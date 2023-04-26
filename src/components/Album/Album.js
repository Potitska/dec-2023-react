import React from 'react';

const Album = ({album}) => {
    const {id,title} = album;

    return (
        <div>
          <div>id: {id}</div>
          <div>title: {title}</div>
        </div>
    );
};

export default Album;