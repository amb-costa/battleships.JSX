import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";

//StateBar: gives info regarding the CPU moves
//Displays the CPU movement just made. Did it hit a ship or it missed?
//Includes button to trigger a new CPU movement
const StateBar = () => {
  const { store, actions } = useContext(Context);

  const State = () => {
    if (store.cpuBoard.length == 0) {
      return (
        <div className="my-2">
          <h4>CPU hasn't made moves yet!</h4>
          <h6>Click the button below to start the game!</h6>
        </div>
      );
    } else {
      return (
        <div className="my-2">
          <h4>The CPU just played:</h4>
          <h6>{store.cpuBoard[0]}</h6>
        </div>
      );
    }
  };

  return (
    <div className="container-fluid justify-content-center position-relative my-3">
      <div className="bg-white border mx-5">
        <State />
        <div className="my-2">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => actions.cpuAttack()}
          >
            Click for a new CPU move!
          </button>
        </div>
      </div>
    </div>
  );
};

export default StateBar;
