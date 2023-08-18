import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

//BoardButton :  main constructor for playable buttons
//indexCol = vertical coordinate (showed as a number)
//indexRow = horizontal coordinate (showed as a letter)
//mode = "selection" or "attack"
const BoardButton = ({ indexCol, indexRow, mode }) => {
  const { store, actions } = useContext(Context);
  const letterPos = actions.numToAlpha(indexRow);
  const coord = `${indexRow}` + `${indexCol}`;

  //colorGenerator : gives a color to each button according to their type
  //In "selection" mode : all buttons are clickeable until they're assigned to a ship
  //In "attack" mode : no buttons are clickeable, and the color is reactive to the CPU moves
  function colorGenerator(i) {
    let shipSection = store.userBoard["placements"];
    let placementValues = Object.values(shipSection).flat();
    if (placementValues.includes(i)) {
      return actions.coloredShip(i);
    } else if (store.cpuBoard["hits"].includes(i)) {
      return "btn col px-0 border bg-dark disabled";
    } else if (store.cpuBoard["misses"].includes(i)) {
      return "btn col px-0 border bg-secondary bg-opacity-25 disabled";
    } else {
      if (mode == "selection") {
        return "btn col px-0 border";
      } else {
        return "btn col px-0 border bg-primary bg-opacity-25 disabled";
      }
    }
  }

  //modeRedirect : if mode == "selection", the button will have an onClick calling the shipSorter function
  function modeRedirect() {
    mode == "selection" ? actions.shipSorter(indexRow, indexCol) : null;
  }

  return (
    <div
      className={colorGenerator(coord)}
      type="button"
      id="playable"
      onClick={() => {
        modeRedirect();
      }}
    >
      {letterPos}
      {indexCol}
    </div>
  );
};

export default BoardButton;
