import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
/* import data from "./data.json"; */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";



const CardPostComponent = ({ Posts, searchName, setPostEditado, useEffects }) => {

const [busqueda, setBusqueda]= useState("");
  
const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=searchName.filter((elemento) => {
    if(elemento.titulo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.contenido.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setPostEditado(resultadosBusqueda);
}

useEffect(()=>{
  },[useEffect])

  return (
    <div class="grid">
      <hr />
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={handleChange}
          value={busqueda}
        />
        <hr />
        <div class="row casillas">
          {searchName && Posts.map((post) => (
            <div class="col">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.url}
                  alt="no_image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <a href="*" className="btn">
                      {post.usuario.nombre}
                    </a>
                    <hr />
                    <br />
                    {post.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.contenido}
                    <br />
                    <br />
                    <hr />
                    {post.usuario.comuna.nombreComuna} -{" "}
                    {post.usuario.comuna.provincia.region.nombreRegion}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Compartir</Button>
                  <Button size="small">Leer mas</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPostComponent;
