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

  //colorGenerator: searches for coord in the placement object
  //colorizes button according to the assigned ship
  //if button is not assigned to a ship, no color is assigned
  function colorGenerator(i) {
    let shipSection = store.userBoard["placements"];
    let placementValues = Object.values(shipSection).flat();
    if (placementValues.includes(i)) {
      if (shipSection["5"].includes(i)) {
        return "col px-0 border bg-danger bg-opacity-50";
      } else if (shipSection["4"].includes(i)) {
        return "col px-0 border bg-success bg-opacity-50";
      } else if (shipSection["3"].includes(i)) {
        return "col px-0 border bg-primary bg-opacity-50";
      } else {
        return "col px-0 border bg-warning bg-opacity-50";
      }
    } else {
      return "col px-0 border";
    }
  }

  return (
    <div
      className={colorGenerator(coord)}
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
