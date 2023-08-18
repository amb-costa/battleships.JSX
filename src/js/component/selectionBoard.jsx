import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import BoardButton from "./boardButton.jsx";

//SelectionBoard: main board for selection mode
//Every button is mapped under the "selection" mode
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
                indexCol={index}
                indexRow={"1"}
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
                indexCol={index}
                indexRow={"2"}
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
                indexCol={index}
                indexRow={"3"}
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
                indexCol={index}
                indexRow={"4"}
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
                indexCol={index}
                indexRow={"5"}
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
                indexCol={index}
                indexRow={"6"}
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
                indexCol={index}
                indexRow={"7"}
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
                indexCol={index}
                indexRow={"8"}
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
                indexCol={index}
                indexRow={"9"}
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
