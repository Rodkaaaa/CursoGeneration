import React, { useState } from "react";
/* import TextField from "@mui/material/TextField"; */
/* import data from "./data.json"; */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";

const CardPostComponent = ({Posts}) => {
  return (
    <div class="grid">
      <div class="row casillas">
        {Posts.map((post) => (
          <div class="col">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={post.url}
              alt="no_image"
            />
            <CardContent>
              <Typography  gutterBottom variant="h5" component="div">
                {post.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.contenido}
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
  );
};

export default CardPostComponent;
