import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <a className="navbar-brand fs-3 mx-4">Battleship!</a>
      <div className="ml-auto">
        <button
          className="btn mx-4 border border-dark"
          type="button"
          onClick={() => {
            actions.reset();
          }}
        >
          Reset Game
        </button>
      </div>
    </nav>
  );
};
