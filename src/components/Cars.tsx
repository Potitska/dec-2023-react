import React, {useEffect, useState} from 'react';

import {ICar} from "../interfaces/carInterface";
import {carService} from "../services/car.service";
import Car from "./Car";

const Cars = () => {
    let [cars,setCars] = useState<ICar[]>([]);

    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[])

    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;