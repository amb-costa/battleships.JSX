import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //board contains 9 alpha rows with 9 numerical columns each
      board: {
        A: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        B: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        C: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        D: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        E: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        F: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        G: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        H: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        I: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      myList: [],
      //direction: true for horizontal, false for vertical
      direction: "",
      userBoard: {},
      ship: "",
    },
    actions: {
      reset: () => {
        setStore({ userBoard: {} });
        setStore({ direction: "" });
        setStore({ ship: "" });
        return console.log("changes cleared");
      },
      setDirection: (dir) => {
        setStore({ direction: dir });
        return console.log(getStore().direction);
      },
      setShip: (ship) => {
        setStore({ ship: ship });
        return console.log(getStore().ship);
      },
      includes: (coord) => {
        return Object.values(getStore().userBoard).flat().includes(coord);
      },
      permit: (direction, ship) => {
        setStore({ permit: true, direction: direction, ship: ship });
      },
      shipSorter: (id, section) => {
        console.log(getStore().direction);
        if (getStore().permit) {
          if (parseInt(id[1]) + parseInt(getStore().ship) > 10) {
            console.log("not enough space to fit!");
          } else {
            let finPick = [];
            for (let i = 0; i < parseInt(getStore().ship); i++) {
              finPick.push(`${section}${parseInt(id) + i}`);
            }
            if (!Object.hasOwn(getStore().userBoard, getStore().ship)) {
              let obj = {
                [getStore().ship]: finPick,
              };
              let copy = { ...getStore().userBoard, ...obj };
              setStore({ userBoard: copy });
            } else {
              console.log("you made your ship choice already!");
            }
            console.log(getStore().userBoard);
          }
        } else {
          return console.log("inprogress...");
        }
      },
    },
  };
};

export default getState;
