import React, { useState, useContext, useRef } from "react";
import { Context } from "../store/appContext.js";

// BoardButton =  main constructor for playable buttons
// Should change color and trigger the game solver
const BoardButton = ({ buttonID, section }) => {
  const { store, actions } = useContext(Context);
  const coord = `${section}` + `${buttonID}`;
  const ship = useRef("");
  console.log(typeof ship);

  function colorGenerator(i) {
    switch (i) {
      case 5:
        return `${"col px-0 border bg-danger disabled"}`;
        break;
      case 4:
        return "col px-0 border bg-success disabled";
        break;
      case 3:
        return "col px-0 border bg-primary disabled";
        break;
      case 2:
        return "col px-0 border bg-warning disabled";
        break;
      default:
        return "col px-0 border";
    }
  }

  if (actions.includes(coord)) {
    return (
      <div
        className={colorGenerator(ship)}
        type="button"
        id={buttonID}
        style={{ width: "50px", height: "50px" }}
      >
        {section}
        {buttonID}
      </div>
    );
  } else {
    return (
      <div
        className="col px-0 border"
        type="button"
        id={buttonID}
        style={{ width: "50px", height: "50px" }}
        onClick={() => {
          actions.shipSorter(buttonID, section);
        }}
      >
        {section}
        {buttonID}
      </div>
    );
  }
};

export default BoardButton;
