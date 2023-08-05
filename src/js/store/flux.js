import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //boardGen iterates mapping
      boardGen: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      //userBoard: store for arrays representing ships and their coord
      userBoard: {},
    },
    actions: {
      //generalHandler: adds generic key and data to store
      generalHandler: (object, data) => {
        setStore({ [`${object}`]: data });
      },
      //reset: clears the whole player board
      reset: () => {
        setStore({ userBoard: {} });
        setStore({ direction: null });
        setStore({ ship: null });
        return console.log("changes cleared");
      },
      //includes: checks if the coordinate is already picked
      includes: (coord) => {
        let values = Object.values(getStore().userBoard);
        return values.flat().includes(coord);
      },
      permit: () => {
        return getStore().direction != null && getStore().ship != null
          ? true
          : false;
      },
      coordRandom: () => {
        const column = parseInt(Math.random() * 8 + 1);
        const row = getActions().alphaSwitchNum(
          parseInt(Math.random() * 8 + 1)
        );
        const coord = `${row}${column}`;
      },
      alphaSwitchNum: (element) => {
        let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        let numer = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        if (typeof element == "number") {
          return alphabet[numer.indexOf(element)];
        } else {
          const position = alphabet.indexOf(element);
          console.log(position);
          return numer[position];
        }
      },
      shipSorter: (id, section) => {
        const value = getStore().direction;
        console.log(value);
        if (getActions().permit) {
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
              if (getStore().direction == "true") {
                finPick.push(`${section}${parseInt(id) + i}`);
              } else {
                let index = getActions().alphaSwitchNum(section);
                let letter = getActions().alphaSwitchNum(index + i);
                finPick.push(`${letter}${parseInt(id)}`);
              }
            }
            if (!finPick.some((el) => getActions().includes(el))) {
              let updated = getStore().userBoard;
              const newShip = { [getStore().ship]: finPick };
              updated = { ...updated, ...newShip };
              setStore({
                userBoard: updated,
                direction: null,
                ship: null,
              });
              console.log("clean slate");
            } else {
              console.log("tiles already used!");
            }
          }
        } else {
          console.log("pick ship and direction first!");
        }
        console.log(getStore().userBoard);
      },
      coordFinder: () => {
        //for (let index of getStore().userBoard) {
        //if (index.includes(coord)) {
        //return index.length;
        //}
        //}
      },
    },
  };
};

export default getState;
