import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AutoPage, UsuarioPage, Home } from "./pages";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Home/>}/>
        <Route path="/Auto" element = {<AutoPage/>}/>
        <Route path="/usuario" element = {<UsuarioPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;//defaul sin llaves