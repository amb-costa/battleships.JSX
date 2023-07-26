import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

// BoardButton =  main constructor for playable buttons
// Should change color and trigger the game solver
const BoardButton = ({ buttonID }) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className={
        store.myList.includes(`${buttonID}`)
          ? "col px-0 border bg-secondary"
          : "col px-0 border"
      }
      type="button"
      id={buttonID}
      style={{ width: "50px", height: "50px" }}
      onClick={() => {
        actions.pusher(`${buttonID}`);
      }}
    >
      {buttonID}
    </div>
  );
};

export default BoardButton;
