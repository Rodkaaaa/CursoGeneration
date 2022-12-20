import React, {useState, useEffect} from "react";
import { CardPostComponent } from "../components";
import "./Home.css";
import { getAllPost } from "../service/Post";
import search from "../components";
const post = [{
  titulo: "titulo",
  contenido: "contenido"
}]

const Home = () => {
  const [state, setState] = useState([]);
  const [stateSearch, setStateSearch] = useState("");

useEffect(()=>{
  getPost();
},[])

const getPost = async()=>{
  const postBD = await getAllPost();
  setState(postBD)
}


  return (
    <body>
      <h1>Headder</h1>
      <div class="grilla">
        <CardPostComponent Posts={state} />
      </div>
      <div>
        <h2>Footer</h2>
      </div>
    </body>
  );
};

export default Home;
