import React from 'react';

const Simson = ({simson}) => {
   const {id, name, image} = simson;
    return (
        <div>
            <div>:{id}</div>
            <div>:{name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Simson;