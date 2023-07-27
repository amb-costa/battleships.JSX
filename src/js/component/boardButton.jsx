import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

// BoardButton =  main constructor for playable buttons
// Should change color and trigger the game solver
const BoardButton = ({ buttonID }) => {
  const { store, actions } = useContext(Context);

  if (actions.includes(`${buttonID}`)) {
    return (
      <div
        className="col px-0 border bg-secondary"
        type="button"
        id={buttonID}
        disabled={true}
        style={{ width: "50px", height: "50px" }}
      >
        {buttonID}
      </div>
    );
  } else {
    return (
      <div
        className="col px-0 border"
        type="button"
        id={buttonID}
        disabled={false}
        style={{ width: "50px", height: "50px" }}
        onClick={() => {
          actions.shipSorter(`${buttonID}`);
        }}
      >
        {buttonID}
      </div>
    );
  }
};

export default BoardButton;
