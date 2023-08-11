import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import BoardButton from "../component/boardButton.jsx";

//Battle: main board in battle mode
//CPU generates a random coord
//Buttons will react to the attack: trigger a solver function in the store
const AttackBoard = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid justify-content-center" id="board">
      <div className="container-fluid border border-secondary bg-white p-0 mx-auto">
        <div className="row bg-secondary bg-opacity-50 mx-0">
          <div className="col px-0 border disabled bg-secondary bg-opacity-25">
            -
          </div>
          {store.boardGen.map((index) => {
            return (
              <div
                className="col px-0 border disabled bg-secondary bg-opacity-25"
                key={index}
              >
                {index}
              </div>
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-25">
            A
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`A${index}`}
                indexCol={index}
                indexRow={"1"}
                mode={"attack"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-25">
            B
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`B${index}`}
                indexCol={index}
                indexRow={"2"}
                mode={"attack"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-25">
            C
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`C${index}`}
                indexCol={index}
                indexRow={"3"}
                mode={"attack"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-25">
            D
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`D${index}`}
                indexCol={index}
                indexRow={"4"}
                mode={"attack"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-25">
            E
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`E${index}`}
                indexCol={index}
                indexRow={"5"}
                mode={"attack"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-25">
            F
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`F${index}`}
                indexCol={index}
                indexRow={"6"}
                mode={"attack"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-25">
            G
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`G${index}`}
                indexCol={index}
                indexRow={"7"}
                mode={"attack"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-25">
            H
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`H${index}`}
                indexCol={index}
                indexRow={"8"}
                mode={"attack"}
              />
            );
          })}
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col px-0 border disabled bg-secondary bg-opacity-25">
            I
          </div>
          {store.boardGen.map((index) => {
            return (
              <BoardButton
                key={`I${index}`}
                indexCol={index}
                indexRow={"9"}
                mode={"attack"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AttackBoard;
