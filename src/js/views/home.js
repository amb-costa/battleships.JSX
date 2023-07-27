import React, { useContext } from "react";
import Game from "./game.js";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="text-center">
      <h1>Battleship: You vs CPU!</h1>
      <Game />
    </div>
  );
};
