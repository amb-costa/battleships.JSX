import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Board from "../component/board.jsx";
import "../../styles/home.css";

const Game = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div>
        <h4>You have selected these so far:</h4>
        {store.myList.map((index) => {
          return (
            <span className="mx-2" key={index}>
              {index}
            </span>
          );
        })}
      </div>
      <Board />
    </div>
  );
};

export default Game;
