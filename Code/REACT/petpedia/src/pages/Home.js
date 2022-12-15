import React from "react";
import { CardPostComponent } from "../components";
import "./Home.css";

const Home = () => {
  return (
    <body>
      <h1>Headder</h1>
      <div class="grilla">
        <CardPostComponent />
      </div>
      <div>
        <h2>Footer</h2>
      </div>
    </body>
  );
};

export default Home;
