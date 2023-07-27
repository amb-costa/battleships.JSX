import React, { useContext, useState, useEffect } from "react";
import getState from "../store/flux.js";
import { Context } from "../store/appContext.js";

const ControlBar = () => {
  const { store, actions } = useContext(Context);
  const [direction, setDirection] = useState(null);
  const [ship, setShip] = useState(null);

  useEffect(() => {
    if (direction != null && ship != null) {
      actions.permit(direction, ship);
      setDirection(null);
      setShip(null);
    }
  }, [direction, ship]);

  return (
    <div className="container justify-content-center">
      <div className="row my-3 justify-content-center">
        <div className="col-4">
          <h5>Pick your direction:</h5>
          <button
            className="btn mx-1 border"
            type="button"
            onClick={() => {
              setDirection(true);
            }}
          >
            Horizontal
          </button>
          <button
            className="btn mx-1 border"
            type="button"
            onClick={() => {
              setDirection(false);
            }}
          >
            Vertical
          </button>
        </div>
        <div className="col-7">
          <h5>Pick your ship:</h5>
          <button
            className="btn mx-1 px-2 border"
            type="button"
            onClick={() => {
              setShip(5);
            }}
          >
            Carrier
          </button>
          <button
            className="btn mx-1 px-2 border"
            type="button"
            onClick={() => {
              setShip(4);
            }}
          >
            Battleship
          </button>
          <button
            className="btn mx-1 px-2 border"
            type="button"
            onClick={() => {
              setShip(3);
            }}
          >
            Submarine
          </button>
          <button
            className="btn mx-1 px-2 border"
            type="button"
            onClick={() => {
              setShip(2);
            }}
          >
            Destroyer
          </button>
        </div>
        {store.direction == "" || store.ship == "" ? (
          <div className="col-5 my-2 p-1 alert alert-danger" role="alert">
            Got to select ship and direction!
          </div>
        ) : (
          <div className="col-3 my-2 py-1 alert alert-success" role="alert">
            Good to go!
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlBar;
