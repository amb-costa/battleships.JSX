import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";

//BoardButton =  main constructor for playable buttons
//Needs an update, since the Board component should be used to select ships and actual gameplay
//Currently: indexRow + indexCol creates coordinates, then sent to ShipSorter
//ColorGenerator creates className according to ship: should be useful for gameplay
const BoardButton = ({ indexCol, indexRow, mode }) => {
  const { store, actions } = useContext(Context);
  const letterPos = actions.numToAlpha(indexRow);
  const coord = `${letterPos}` + `${indexCol}`;

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
      id={indexCol}
      style={{ width: "50px", height: "50px" }}
      onClick={() => {
        actions.shipSorter(indexRow, indexCol);
      }}
    >
      {letterPos}
      {indexCol}
    </div>
  );
};

export default BoardButton;
