import React from "react";

const BoardButton = ({ content }) => {
  return (
    <div className="col px-0 border" type="button" id="playableButton">
      {content}
    </div>
  );
};

export default BoardButton;
