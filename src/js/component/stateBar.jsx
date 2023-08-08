import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

//ControlBar: main div for directon + ship buttons
//Sends direction + ship to store, so BoardButton can evaluate buttons according to id + section
//Creates button to redirect to Battle view when all the ships are selected
//This should disappear when app turns to Battle view, since it only works for ship selection
const StateBar = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid justify-content-center needs-validation">
      <div className="row my-3 bg-white border justify-content-center">
        <div className="col-4 mx-2 py-2">
          <h5>The CPU just played:</h5>
          <h6>{store.cpuBoard[0]}</h6>
        </div>
        <div className="col-7 mx-2 py-2">
          <h5>Pick your ship:</h5>
        </div>
      </div>
    </div>
  );
};

export default StateBar;
