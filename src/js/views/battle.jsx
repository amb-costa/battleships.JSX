import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import StateBar from "../component/stateBar.jsx";
import AttackBoard from "../component/attackBoard.jsx";
import "../../styles/home.css";

//Battle: view for CPU Attack mode
//Before anything, checks if the ship selection is complete. if not, redirects to / page
//StateBar: info about the CPU moves + attacks + button to trigger CPU moves
//AttackBoard: board generated with reactive buttons
const Battle = () => {
  const { store, actions } = useContext(Context);

  const Redirect = () => {
    if (Object.values(store.userBoard["placements"]).flat().length != 14) {
      return (
        <div className="justify-content-center my-5 bg-danger bg-opacity-25 border p-5 position-relative">
          <h1>
            Uh oh, seems like you haven't finished your ship selection yet...
          </h1>
          <Link to="/">
            <button
              className="btn px-2 mt-2 btn-outline-secondary"
              type="submit"
            >
              Return to selection page
            </button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="justify-content-center px-5 position-relative">
          <StateBar />
          <AttackBoard />
        </div>
      );
    }
  };

  return (
    <div className="position-absolute bg-secondary text-center h-100 w-100 bg-opacity-25">
      <h1 className="my-3">Battleship: You vs CPU!</h1>
      <Redirect />
    </div>
  );
};

export default Battle;
