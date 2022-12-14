import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {  Boton } from "../components";
import "./Home.css"


const Home  = () =>{
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=>navigate("/Auto",{},[navigate]));
    const handleOnClick2 = useCallback(()=>navigate( "/Usuario",{},[navigate]));
    return(
        <div class = "container contenedor">
            <Boton infoBoton={'Ir a Autos'} handleOnClick = {handleOnClick}/>
            <Boton infoBoton={'Ir a Usuario'} handleOnClick = {handleOnClick2}/>
        </div>
    );
};

export{Home}