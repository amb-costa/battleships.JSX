import React from "react";
import Board from "../component/board.jsx";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Battleship: You vs CPU!</h1>
    <Board />
  </div>
);
