import axios from "axios";

import { url } from "./Config";

const getAllPost = async() =>{
    const res = await axios.get(url+"/post/getAll");
    return res.data;

}

export {getAllPost}