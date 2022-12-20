import axios from "axios";

import { url } from "./Config";

const addUser = async(usuario) =>{
    const res = await axios.post(url+"/user",usuario);
    console.log(res);
    return res.data;
}

const getUser = async(id) => {
    const res = await axios.get(url+"/user/"+id);
    console.log(res);
    return res.data
}

const getAllUser = async() => {
    const res = await axios.get(url+"/user/findAll");
    console.log(res);
    return res.data
}

const updateUser = async(usuario) => {
    const res = await axios.put(url+"/user",usuario);
    console.log(res);
    return res.data
}

const delUser = async(id) => {
    const res = await axios.delete(url+"/deleteUser/"+id);
    console.log(res);
    return res.data
}

export {addUser,getUser,delUser,updateUser,getAllUser};