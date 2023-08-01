import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

//ControlBar: main div for directon + ship buttons
//Sends direction + ship to store, so BoardButton can evaluate buttons according to id + section
//Creates button to redirect to Battle view when all the ships are selected
//This should disappear when app turns to Battle view, since it only works for ship selection
const ControlBar = () => {
  const { store, actions } = useContext(Context);

  return (
    <form className="container-fluid justify-content-center needs-validation">
      <div className="row my-3 bg-white border justify-content-center">
        <div className="col-4 mx-2 py-2">
          <h5>Pick your direction:</h5>
          <div className="input-group justify-content-evenly">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="directionRadio"
                value={true}
                id="checkHorizontal"
                checked={store.direction === "true"}
                onChange={(e) => {
                  actions.generalHandler("direction", e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="checkHorizontal">
                Horizontal
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="directionRadio"
                value={false}
                id="checkVertical"
                checked={store.direction === "false"}
                onChange={(e) => {
                  actions.generalHandler("direction", e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="checkVertical">
                Vertical
              </label>
            </div>
          </div>
        </div>
        <div className="col-7 mx-2 py-2">
          <h5>Pick your ship:</h5>
          <div className="input-group justify-content-evenly">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="shipRadio"
                value="5"
                id="check5"
                checked={store.ship === "5"}
                onChange={(e) => {
                  actions.generalHandler("ship", e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="check5">
                Cruiser
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="shipRadio"
                value="4"
                id="check4"
                checked={store.ship === "4"}
                onChange={(e) => {
                  actions.generalHandler("ship", e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="check4">
                Battleship
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="shipRadio"
                value="3"
                id="check3"
                checked={store.ship === "3"}
                onChange={(e) => {
                  actions.generalHandler("ship", e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="check3">
                Submarine
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="shipRadio"
                value="2"
                id="check2"
                checked={store.ship === "2"}
                onChange={(e) => {
                  actions.generalHandler("ship", e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="check2">
                Destroyer
              </label>
            </div>
          </div>
        </div>
      </div>

      {store.userBoard.length == 4 ? (
        <div className="col-5 my-2 py-2 justify-content-center">
          <div
            className="my-2 py-1 alert alert-success align-self-center"
            role="alert"
          >
            Ready to play!
          </div>
          <Link to="/battle">
            <button className="btn mx-1 border" type="submit">
              Go!
            </button>
          </Link>
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
    </form>
  );
};

export default ControlBar;
