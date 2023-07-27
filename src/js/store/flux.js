import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //boardGen iterates mapping
      boardGen: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      //userBoard: store for arrays representing ships and their coord
      userBoard: [],
    },
    actions: {
      reset: () => {
        setStore({ userBoard: [] });
        setStore({ direction: "" });
        setStore({ ship: "" });
        setStore({ permit: false });
        return console.log("changes cleared");
      },
      includes: (coord) => {
        return getStore().userBoard.flat().includes(coord);
      },
      permit: (direction, ship) => {
        setStore({ permit: true, direction: direction, ship: ship });
      },
      alphaSwitchNum: (element) => {
        let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        let numer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (typeof element == "number") {
          return alphabet[numer.indexOf(element)];
        } else {
          const position = alphabet.indexOf(element);
          return numer[position];
        }
      },
      shipSorter: (id, section) => {
        if (getStore().permit) {
          if (
            (getStore().direction &&
              parseInt(id) + parseInt(getStore().ship) > 10) ||
            (!getStore().direction &&
              getActions().alphaSwitchNum(section) + parseInt(getStore().ship) >
                10)
          ) {
            console.log("not enough space to fit!");
          } else {
            let finPick = [];
            for (let i = 0; i < parseInt(getStore().ship); i++) {
              if (getStore().direction) {
                finPick.push(`${section}${parseInt(id) + i}`);
              } else {
                let index = getActions().alphaSwitchNum(section);
                let letter = getActions().alphaSwitchNum(index + i);
                finPick.push(`${letter}${parseInt(id)}`);
              }
            }
            if (!finPick.some((el) => getActions().includes(el))) {
              console.log(finPick.some((el) => getActions().includes(el)));
              const updated = getStore().userBoard;
              updated.push(finPick);
              setStore({
                userBoard: updated,
                permit: false,
                direction: "",
                ship: "",
              });
            } else {
              console.log("tiles already used!");
            }
          }
        } else {
          console.log("pick ship and direction first!");
        }
        console.log(getStore().userBoard);
      },
      coordFinder: (coord) => {
        for (let index of getStore().userBoard) {
          if (index.includes(coord)) {
            return index.length;
          }
        }
      },
    },
  };
};

export default getState;
