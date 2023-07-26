import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const BoardButton = ({ content }) => {
  const { store, actions } = useContext(Context);
  return (
    <div
      className="col px-0 border"
      type="button"
      id="playableButton"
      onClick={() => {
        actions.pusher(`${content}`);
      }}
    >
      {content}
    </div>
  );
};

export default BoardButton;
