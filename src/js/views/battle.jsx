import React from "react";
import StateBar from "../component/stateBar.jsx";
import AttackBoard from "../component/attackBoard.jsx";
import "../../styles/home.css";

//Battle: view for CPU Attack mode
//StateBar: info about the CPU moves + attacks
//AttackBoard: board generated with reactive buttons
//Each button reacts to the CPU moves and delivers info accordingly
const Battle = () => {
  return (
    <div className="text-center bg-secondary position-absolute h-100 w-100 bg-opacity-25">
      <h1 className="my-3">Battleship: You vs CPU!</h1>
      <div className="justify-content-center">
        <StateBar />
        <AttackBoard />
      </div>
    </div>
  );
};

export default Battle;
