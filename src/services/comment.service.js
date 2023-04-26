import {axiosService} from "./axios.service";
import * as urls from "../constants/urls";

const commentService = {
    getAll:()=>axiosService.get(urls.comments)
}


export {
    commentService
}