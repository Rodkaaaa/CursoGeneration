import React, {useState, useEffect} from "react";
import { CardPostComponent } from "../components";
import "./Home.css";
import { getAllPost, findAllNombrePost } from "../service/Post";
import { getAllComuna } from "../service/Comuna";
/* import TextField from "@mui/material/TextField";
 */

/* import search from "../components"; */

const Home = () => {
const [state, setState] = useState([]);
const [stateSearch, setStateSearch] = useState([]);

useEffect(()=>{
  getPost();
},[])

const getPost = async()=>{
  const postBD = await getAllPost()
    setState(postBD)
    setStateSearch(postBD)
}

/* const getComuna = async()=>{
  const ComunaBD = await getAllComuna();
  setStateComuna(ComunaBD)
} */
/* 
const allNombrePost = async(nombre)=>{
  const postBD = await findAllNombrePost(nombre)
    setState(postBD)
    getPost()
} */


  return (
    <div>
      <div class="grilla">
        <CardPostComponent setPostEditado = {setState} Posts={state} searchName = {stateSearch} useEffects={useEffect} />
      </div>
      <div>
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default Home;
