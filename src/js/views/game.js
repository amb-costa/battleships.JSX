import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Board from "../component/board.jsx";
import "../../styles/home.css";

const Game = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <Board />
    </div>
  );
};

export default Game;
