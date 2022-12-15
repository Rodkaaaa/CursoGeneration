import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import data from "./data.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";

const CardPostComponent = (props) => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = data.filter((el) => {
    if (data.titulo === '') {
        return el;
    } else {
        return el.titulo.toLowerCase().includes(data.titulo)
    }
})
  return (
    <div class="container">
      <div class="row casillas">
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
            value={inputText}
          />
        </div>
        {data.map((post) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={post.img_url}
              alt="no_image"
            />
            <CardContent>
              <Typography  gutterBottom variant="h5" component="div">
                {post.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.descripcion}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartir</Button>
              <Button size="small">Leer mas</Button>
            </CardActions>
          </Card>
        ))}
      </div>
       
    </div>
  );
};

export default CardPostComponent;
