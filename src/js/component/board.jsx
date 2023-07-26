import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import BoardButton from "./boardButton.jsx";

const Board = () => {
  const { store, actions } = useContext(Context);
  return (
    <div
      className="container border border-secondary border-2 p-0 mx-auto justify-content-center"
      id="board"
    >
      <div className="row bg-secondary bg-opacity-50 justify-content-center">
        <div className="col px-0 border">-</div>
        <div className="col px-0 border">1</div>
        <div className="col px-0 border">2</div>
        <div className="col px-0 border">3</div>
        <div className="col px-0 border">4</div>
        <div className="col px-0 border">5</div>
        <div className="col px-0 border">6</div>
        <div className="col px-0 border">7</div>
        <div className="col px-0 border">8</div>
        <div className="col px-0 border">9</div>
      </div>
      <div className="row justify-content-center">
        <div className="col px-0 border bg-secondary bg-opacity-50">A</div>
        {store.board.A.map((index) => {
          return <BoardButton key={`A${index}`} content={`A${index}`} />;
        })}
      </div>
      <div className="row justify-content-center">
        <div className="col px-0 border bg-secondary bg-opacity-50">B</div>
        {store.board.B.map((index) => {
          return <BoardButton key={`B${index}`} content={`B${index}`} />;
        })}
      </div>
      <div className="row justify-content-center">
        <div className="col px-0 border bg-secondary bg-opacity-50">C</div>
        {store.board.C.map((index) => {
          return <BoardButton key={`C${index}`} content={`C${index}`} />;
        })}
      </div>
      <div className="row justify-content-center">
        <div className="col px-0 border bg-secondary bg-opacity-50">D</div>
        {store.board.D.map((index) => {
          return <BoardButton key={`D${index}`} content={`D${index}`} />;
        })}
      </div>
      <div className="row justify-content-center">
        <div className="col px-0 border bg-secondary bg-opacity-50">E</div>
        {store.board.E.map((index) => {
          return <BoardButton key={`E${index}`} content={`E${index}`} />;
        })}
      </div>
      <div className="row justify-content-center">
        <div className="col px-0 border bg-secondary bg-opacity-50">F</div>
        {store.board.F.map((index) => {
          return <BoardButton key={`F${index}`} content={`F${index}`} />;
        })}
      </div>
      <div className="row justify-content-center">
        <div className="col px-0 border bg-secondary bg-opacity-50">G</div>
        {store.board.G.map((index) => {
          return <BoardButton key={`G${index}`} content={`G${index}`} />;
        })}
      </div>
      <div className="row justify-content-center">
        <div className="col px-0 border bg-secondary bg-opacity-50">H</div>
        {store.board.H.map((index) => {
          return <BoardButton key={`H${index}`} content={`H${index}`} />;
        })}
      </div>
      <div className="row justify-content-center">
        <div className="col px-0 border bg-secondary bg-opacity-50">I</div>
        {store.board.I.map((index) => {
          return <BoardButton key={`I${index}`} content={`I${index}`} />;
        })}
      </div>
    </div>
  );
};

export default Board;
