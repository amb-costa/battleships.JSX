import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";

// BoardButton =  main constructor for playable buttons
// Should change color and trigger the game solver
const BoardButton = ({ buttonID, section }) => {
  const { store, actions } = useContext(Context);
  const coord = `${section}` + `${buttonID}`;

  function colorGenerator(i) {
    switch (i) {
      case 5:
        return "col px-0 border bg-danger bg-opacity-50 disabled";
        break;
      case 4:
        return "col px-0 border bg-success bg-opacity-50 disabled";
        break;
      case 3:
        return "col px-0 border bg-primary bg-opacity-50 disabled";
        break;
      case 2:
        return "col px-0 border bg-warning bg-opacity-50 disabled";
        break;
      default:
        return "col px-0 border";
    }
  }

  return (
    <div
      className={colorGenerator(actions.coordFinder(coord))}
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
};

export default BoardButton;
