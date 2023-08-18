import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";

//BoardButton =  main constructor for playable buttons
//Needs an update, since the Board component should be used to select ships and actual gameplay
//Currently: indexRow + indexCol creates coordinates, then sent to ShipSorter
//ColorGenerator creates className according to ship: should be useful for gameplay
const BoardButton = ({ indexCol, indexRow, mode }) => {
  const { store, actions } = useContext(Context);
  const letterPos = actions.numToAlpha(indexRow);
  const coord = `${indexRow}` + `${indexCol}`;

  //colorGenerator: searches for coord in the placement object, where ships are stored
  //colorizes button according to the assigned ship and disables it
  //if button is not assigned to a ship, no color is assigned and it's clickeable
  function colorGenerator(i) {
    let shipSection = store.userBoard["placements"];
    let placementValues = Object.values(shipSection).flat();
    if (placementValues.includes(i)) {
      return actions.coloredShip(i);
    } else if (store.cpuBoard["hits"].includes(i)) {
      return "btn col px-0 border bg-dark disabled";
    } else if (store.cpuBoard["misses"].includes(i)) {
      return "btn col px-0 border bg-secondary disabled";
    } else {
      if (mode == "selection") {
        return "btn col px-0 border";
      } else {
        return "btn col px-0 border bg-primary bg-opacity-25 disabled";
      }
    }
  }

  function modeRedirect() {
    mode == "selection" ? actions.shipSorter(indexRow, indexCol) : null;
  }

  return (
    <button
      className={colorGenerator(coord)}
      type="button"
      id={indexCol}
      style={{ width: "50px", height: "50px" }}
      onClick={() => {
        modeRedirect();
      }}
    >
      {letterPos}
      {indexCol}
    </button>
  );
};

export default BoardButton;
