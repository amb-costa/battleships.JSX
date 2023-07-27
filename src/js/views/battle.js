import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

export const Battle = () => {
  const { store, actions } = useContext(Context);
  console.log(store.userBoard);
  return <div>yes!</div>;
};
