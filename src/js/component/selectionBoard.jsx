import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import BoardButton from "./boardButton.jsx";

//SelectionBoard: Board generator under the selection mode
//Every button solves the ship selection function
//Should get updated every time there's a change on the store
const SelectionBoard = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid justify-content-center" id="board">
      <div className="container-fluid border border-secondary bg-white p-0 mx-auto">
        <div className="row bg-secondary bg-opacity-50 mx-0">
          <div className="col px-0 border disabled bg-white bg-opacity-50">
            -
          </div>
          {store.boardGen.map((index) => {
            return (
              <div className="col px-0 border disabled" key={index}>
                {index}
              </div>
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-50">
            A
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`A${index}`}
                buttonID={index}
                section={"A"}
                mode={"selection"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-50">
            B
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`B${index}`}
                buttonID={index}
                section={"B"}
                mode={"selection"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-50">
            C
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`C${index}`}
                buttonID={index}
                section={"C"}
                mode={"selection"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-50">
            D
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`D${index}`}
                buttonID={index}
                section={"D"}
                mode={"selection"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-50">
            E
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`E${index}`}
                buttonID={index}
                section={"E"}
                mode={"selection"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-50">
            F
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`F${index}`}
                buttonID={index}
                section={"F"}
                mode={"selection"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-50">
            G
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`G${index}`}
                buttonID={index}
                section={"G"}
                mode={"selection"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-50">
            H
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`H${index}`}
                buttonID={index}
                section={"H"}
                mode={"selection"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-50">
            I
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`I${index}`}
                buttonID={index}
                section={"I"}
                mode={"selection"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectionBoard;
