import React from "react";
import SelectionBar from "../component/selectionBar.jsx";
import SelectionBoard from "../component/selectionBoard.jsx";
import "../../styles/home.css";

//Selection: works as the Main View (/), shows the ship selection section
//SelectionBar = picking ship types + direction, validates selection before entering the battle view
//SelectionBoard: board generated with clickeable buttons
const Selection = () => {
  return (
    <div className="position-absolute bg-secondary text-center h-100 w-100 bg-opacity-25">
      <h1 className="my-3">Battleship: You vs CPU!</h1>
      <div className="justify-content-center px-5 position-relative">
        <SelectionBar />
        <SelectionBoard />
      </div>
    </div>
  );
};

export default Selection;
