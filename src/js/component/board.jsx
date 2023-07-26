import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import BoardButton from "./boardButton.jsx";
import ControlBar from "./controlBar.jsx";

// Board: main structure for the game
// Should generate playable buttons and store the user's choice
const Board = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container justify-content-center" id="board">
      <ControlBar />
      <div className="container-fluid border border-secondary p-0 mx-auto">
        <div className="row bg-secondary bg-opacity-50 mx-0">
          <div className="col px-0 border">-</div>
          {store.board.A.map((index) => {
            return (
              <div className="col px-0 border" key={index}>
                {index}
              </div>
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">A</div>
          {store.board.A.map((index) => {
            return <BoardButton key={`A${index}`} buttonID={`A${index}`} />;
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">B</div>
          {store.board.B.map((index) => {
            return <BoardButton key={`B${index}`} buttonID={`B${index}`} />;
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">C</div>
          {store.board.C.map((index) => {
            return <BoardButton key={`C${index}`} buttonID={`C${index}`} />;
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">D</div>
          {store.board.D.map((index) => {
            return <BoardButton key={`D${index}`} buttonID={`D${index}`} />;
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">E</div>
          {store.board.E.map((index) => {
            return <BoardButton key={`E${index}`} buttonID={`E${index}`} />;
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">F</div>
          {store.board.F.map((index) => {
            return <BoardButton key={`F${index}`} buttonID={`F${index}`} />;
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">G</div>
          {store.board.G.map((index) => {
            return <BoardButton key={`G${index}`} buttonID={`G${index}`} />;
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">H</div>
          {store.board.H.map((index) => {
            return <BoardButton key={`H${index}`} buttonID={`H${index}`} />;
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border bg-secondary bg-opacity-50">I</div>
          {store.board.I.map((index) => {
            return <BoardButton key={`I${index}`} buttonID={`I${index}`} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
