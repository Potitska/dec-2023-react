import React, {FC} from 'react';

import {ICar} from "../interfaces/carInterface";

interface IProps{
    car:ICar
}
const Car: FC<IProps> = ({car}) => {
    return (
        <div>
            <div>id: {car.id}</div>
            <div>brand: {car.brand}</div>
            <div>price: {car.price}</div>
            <div>year: {car.year}</div>
        </div>
    );
};

export default Car;