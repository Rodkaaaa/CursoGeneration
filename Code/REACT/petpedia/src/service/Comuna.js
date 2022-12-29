import axios from "axios";

import { url } from "./Config";

const getAllComuna = async () => {
  const res = await axios.get(url + "comuna/getAll");
  return res.data;
};

export {getAllComuna}