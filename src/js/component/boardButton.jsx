import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

// BoardButton =  main constructor for playable buttons
// Should change color and trigger the game solver
const BoardButton = ({ buttonID }) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className={actions.classPicker(`${buttonID}`)}
      type="button"
      id={buttonID}
      disabled={store.myList.includes(`${buttonID}`) ? true : false}
      style={{ width: "50px", height: "50px" }}
      onClick={() => {
        actions.shipSorter(`${buttonID}`);
      }}
    >
      {buttonID}
    </div>
  );
};

export default BoardButton;
