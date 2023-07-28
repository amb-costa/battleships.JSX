import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import BoardButton from "./boardButton.jsx";
import ControlBar from "./controlBar.jsx";

//Board: main structure for the game
//The idea is to reuse it for the ship selection + actual gameplay for user and CPU
//Makes use of ControlBar and BoardButton components
const Board = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container justify-content-center" id="board">
      <ControlBar />
      <div className="container-fluid border border-secondary bg-white p-0 mx-auto">
        <div className="row bg-secondary bg-opacity-50 mx-0">
          <div className="col px-0 border">-</div>
          {store.boardGen.map((index) => {
            return (
              <div className="col px-0 border" key={index}>
                {index}
              </div>
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">A</div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton key={`A${index}`} buttonID={index} section={"A"} />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">B</div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton key={`B${index}`} buttonID={index} section={"B"} />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">C</div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton key={`C${index}`} buttonID={index} section={"C"} />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">D</div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton key={`D${index}`} buttonID={index} section={"D"} />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">E</div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton key={`E${index}`} buttonID={index} section={"E"} />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">F</div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton key={`F${index}`} buttonID={index} section={"F"} />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">G</div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton key={`G${index}`} buttonID={index} section={"G"} />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">H</div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton key={`H${index}`} buttonID={index} section={"H"} />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">I</div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton key={`I${index}`} buttonID={index} section={"I"} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
