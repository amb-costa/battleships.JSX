import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

//StateBar : gives info regarding the CPU moves
//Displays recent move, CPU lives left
//Includes button to trigger a new CPU movement or reset game after win/lose
const StateBar = () => {
  const { store, actions } = useContext(Context);

  //State : display for recent moves
  //If there's no move yet, invites user to start playing
  const State = () => {
    if (
      store.cpuBoard["hits"].length == 0 &&
      store.cpuBoard["misses"].length == 0
    ) {
      return (
        <h6 className="my-1">Click the button below to start the game!</h6>
      );
    } else {
      return (
        <h4 className="my-1">
          The CPU just played {actions.numToAlpha(store.cpuBoard["play"][0])}
          {store.cpuBoard["play"][1]}{" "}
        </h4>
      );
    }
  };

  //LiveWinOrDie : display for CPU behavior
  //If CPU sinks a ship, user loses
  //If CPU doesn't sink a ship before 25 lives runs out, user wins
  //If the game is still going, displays how many lives are left
  //Also displays a button to trigger the CPU move, or a redirect to selection page
  const LiveWinOrDie = () => {
    if (Object.keys(store.userBoard["placements"]).length != 3) {
      if (store.cpuBoard["lives"] != 0) {
        return (
          <div>
            <h3>CPU has {store.cpuBoard["lives"]} lives left!</h3>
            <div className="my-1">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => actions.coordSorter()}
              >
                Click for a new CPU move!
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <h3 className="text-success">Congrats, you won!</h3>
            <div className="my-1">
              <Link to="/">
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={() => actions.reset()}
                >
                  Click to start a new game!
                </button>
              </Link>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <h3 className="text-danger">Sorry, the CPU won!</h3>
          <div className="my-1">
            <Link to="/">
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={() => actions.reset()}
              >
                Click to start a new game!
              </button>
            </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container-fluid justify-content-center position-relative my-3">
      <div className="bg-white border mx-5">
        <h3 className="my-1">If the CPU sinks a ship, you lose!</h3>
        <State />
        <LiveWinOrDie />
      </div>
    </div>
  );
};

export default StateBar;
