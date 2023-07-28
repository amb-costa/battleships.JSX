import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Board from "../component/board.jsx";
import "../../styles/home.css";

//Game: Main view, should render boards: for ship selection + actual battle gameplay
//For the moment, only renders the ship selection board
//Needs to be updated when the Battle view is ready, or just be deleted since it might be redundant
const Game = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="justify-content-center">
      <Board />
    </div>
  );
};

export default Game;
