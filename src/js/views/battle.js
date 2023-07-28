import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

//Battle: actual playground
//Should make use of the Board component, which makes use of the boardButton component
//BoardButton needs an update to evaluate: is player setting ships, or actually playing to sink?
//Needs an update to change className according to results
export const Battle = () => {
  const { store, actions } = useContext(Context);
  console.log(store.userBoard);
  console.log("this should be the place for the actual gameplay");
  console.log(
    "the idea is to reuse the board component, therefore boardButton needs changes"
  );
  return (
    <div>
      {store.userBoard.map((element) => {
        return <p key={element}>{element}</p>;
      })}
    </div>
  );
};
