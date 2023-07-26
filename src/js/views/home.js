import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Board from "../component/board.jsx";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <h1>Battleship: You vs CPU!</h1>
      <h4>You have selected these so far:</h4>
      {store.myList.map((index) => {
        return (
          <span className="mx-2" key={index}>
            {index}
          </span>
        );
      })}
      <Board />
    </div>
  );
};
