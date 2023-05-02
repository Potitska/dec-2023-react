import {ICar} from "../interfaces/carInterface";
import {axiosService, IRes} from "./axiosService";
import {urls} from "../config/urls";

const carService = {
    getAll:():IRes<ICar[]> => axiosService.get(urls.cars),
    create:(car:ICar):IRes<ICar> => axiosService.post(urls.cars, car),
    updateById:(id:number, car:ICar):IRes<ICar>=>axiosService.put(`${urls.cars}/${id}`,car),
    delete:(id:number):IRes<void>=>axiosService.delete(`${urls.cars}/${id}`)

}

export {
    carService
}