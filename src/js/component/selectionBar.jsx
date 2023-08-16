import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

//SelectionBar: div containing direction + ship options
//User shall pick direction + ship so the ship placement function works
//After selection is complete, it displays a button redirecting to the battle page
const SelectionBar = () => {
  const { store, actions } = useContext(Context);

  return (
    <form className="container-fluid justify-content-center needs-validation">
      <div className="row my-2 bg-white border justify-content-center">
        <div className="col-4 mx-2 py-2">
          <h5>Pick your direction:</h5>
          <div className="input-group justify-content-evenly">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="directionRadio"
                value={"horizontal"}
                id="checkHorizontal"
                checked={store.direction === "horizontal"}
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
                value={"vertical"}
                id="checkVertical"
                checked={store.direction === "vertical"}
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

      <div className="mb-3 px-5 justify-content-center">
        {store.userBoard["permitted"] ? (
          <div>
            <div className="mx-5 my-0 py-1 alert alert-success" role="alert">
              Ready to play!
            </div>
            <Link to="/battle">
              <button
                className="btn px-2 mt-2 btn-outline-secondary"
                type="submit"
              >
                Go!
              </button>
            </Link>
          </div>
        ) : store.direction != null && store.ship != null ? (
          <div className="mx-5 my-0 py-1  alert alert-success" role="alert">
            Select your head for the ship!
          </div>
        ) : (
          <div className="mx-5 my-0 py-1 alert alert-danger" role="alert">
            Select ship and direction first!
          </div>
        )}
      </div>
    </form>
  );
};

export default SelectionBar;
