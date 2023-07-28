import React, { useContext } from "react";
import Game from "./game.js";
import "../../styles/home.css";

//Home: main view
//Should render the webpage title + the gameplay
//For the moment, only includes the Game view, which might be redundant after solving the Board component
export const Home = () => {
  return (
    <div className="text-center bg-secondary position-absolute h-100 w-100 bg-opacity-25">
      <h1 className="my-3">Battleship: You vs CPU!</h1>
      <Game />
    </div>
  );
};
