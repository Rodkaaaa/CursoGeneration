import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, ListaPublicaciones } from "./pages";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/publicaciones" element = {<ListaPublicaciones/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;//defaul sin llaves