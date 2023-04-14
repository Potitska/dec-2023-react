import React from 'react';
import Simson from "../Simson/Simson";

const Simsons = () => {
    const simsons = [
        {
            id:1,
            name:'Liza',
            image:'https://static.wikia.nocookie.net/simpsons/images/5/57/Lisa_Simpson2.png'
        },
        {
            id:2,
            name:'Bart',
            image:'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            id:3,
            name:'Homer',
            image:'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'
        },
        {
            id:4,
            name:'Maggie',
            image:'https://static.wikia.nocookie.net/simpsons/images/8/8b/Maggie.jpg'
        },
        {
            id:5,
            name:'Marge',
            image:'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'
        },
    ]
    return (
        <div>
            {simsons.map(simson => <Simson key={simson.id} simson={simson}/>)}
        </div>
    );
};

export default Simsons;