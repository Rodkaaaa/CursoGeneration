import axios from "axios";

import { url } from "./Config";

const getAllPost = async () => {
  const res = await axios.get(url + "post/getAll");
  return res.data;
};

const findAllNombrePost = async (nombre) => {
  console.log(nombre)
  const res = await axios.get(url + "post/get/" + nombre);
  console.log(res);
  return res.data;
};

export { getAllPost, findAllNombrePost };
