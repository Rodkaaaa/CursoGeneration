import React from "react";

const BotonComponent = ({infoBoton, handleOnClick }) =>{
    return(
        <div class = "d-grid gap-2 col-6 mx-auto p-3">
        <button onClick={()=>{
            handleOnClick();
        }} 
        type="button" 
        class="btn btn-primary">{infoBoton}</button>
        </div>
    );
};



export default BotonComponent