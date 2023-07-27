import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";

const ControlBar = () => {
  const { store, actions } = useContext(Context);
  const [direction, setDirection] = useState(null);
  const [ship, setShip] = useState(null);
  const [submitter, setSubmitter] = useState([]);

  const shipEnabler = (ship) => {
    let sbm = submitter;
    sbm.push(ship);
    setSubmitter(sbm);
    setShip(ship);
  };

  useEffect(() => {
    if (direction != null && ship != null) {
      actions.permit(direction, ship);
      setDirection(null);
      setShip(null);
      console.log("ready for head choice");
    }
  }, [direction, ship]);

  return (
    <div className="container justify-content-center">
      <div className="row my-3 justify-content-center">
        <div className="col-4">
          <h5>Pick your direction:</h5>
          <button
            className={
              direction == true
                ? "btn mx-1 border bg-secondary bg-opacity-25"
                : "btn mx-1 border"
            }
            type="button"
            onClick={() => {
              setDirection(true);
            }}
          >
            Horizontal
          </button>
          <button
            className={
              direction == false
                ? "btn mx-1 border bg-secondary bg-opacity-25"
                : "btn mx-1 border"
            }
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
            className={
              submitter.includes(5)
                ? "btn mx-1 border bg-secondary bg-opacity-25 disabled"
                : "btn mx-1 border"
            }
            type="button"
            onClick={() => {
              shipEnabler(5);
            }}
          >
            Carrier
          </button>
          <button
            className={
              submitter.includes(4)
                ? "btn mx-1 border bg-secondary bg-opacity-25 disabled"
                : "btn mx-1 border"
            }
            type="button"
            onClick={() => {
              shipEnabler(4);
            }}
          >
            Battleship
          </button>
          <button
            className={
              submitter.includes(3)
                ? "btn mx-1 border bg-secondary bg-opacity-25 disabled"
                : "btn mx-1 border"
            }
            type="button"
            onClick={() => {
              shipEnabler(3);
            }}
          >
            Submarine
          </button>
          <button
            className={
              submitter.includes(2)
                ? "btn mx-1 border bg-secondary bg-opacity-25 disabled"
                : "btn mx-1 border"
            }
            type="button"
            onClick={() => {
              shipEnabler(2);
            }}
          >
            Destroyer
          </button>
        </div>

        {store.userBoard.length == 4 ? (
          <div className="col-5 my-2 py-1 alert alert-success" role="alert">
            Ready to play!
          </div>
        ) : store.permit ? (
          <div className="col-5 my-2 py-1 alert alert-success" role="alert">
            Select your head for the ship!
          </div>
        ) : (
          <div className="col-5 my-2 p-1 alert alert-danger" role="alert">
            Got to select ship and direction!
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlBar;
