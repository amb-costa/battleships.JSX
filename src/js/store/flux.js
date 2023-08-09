import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //boardGen iterates mapping
      boardGen: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      //userBoard: store for arrays representing ships and their coord
      userBoard: {},
      cpuBoard: [],
    },
    actions: {
      //generalHandler: adds generic key and data to store
      generalHandler: (object, data) => {
        setStore({ [`${object}`]: data });
      },
      //coordGenerator: creates random coordinate but checks if it's already taken first
      coordGenerator: () => {
        const row = Math.floor(Math.random() * 9 + 1);
        const col = Math.floor(Math.random() * 9 + 1);
        const coord = `${getActions().alphaSwitchNum(row)}${col}`;
        if (getStore().cpuBoard.includes(coord)) {
          getActions().coordGenerator();
        } else {
          const moves = [coord, ...getStore().cpuBoard];
          setStore({ cpuBoard: moves });
          return coord;
        }
      },
      //cpuAttack: checks userboard using random coordinates from the CPU
      //main function that organizes the attack playmode
      cpuAttack: () => {
        const attack = getActions().coordGenerator();
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
      //alphaSwitchNum: transforms a number into their corresponding letter and viceversa
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
      //shipFit: does the ship fit the grid on the selected tile?
      //direction: true for horizontal (selects id), false for vertical (selects section)
      //ship: integer from 2 to 5
      shipFit: (id, section) => {
        if (
          (getStore().direction &&
            parseInt(id) + parseInt(getStore().ship) > 10) ||
          (!getStore().direction &&
            getActions().alphaSwitchNum(section) + parseInt(getStore().ship) >
              10)
        ) {
          return false;
        } else {
          return true;
        }
      },
      //shipSorter: receiver a coordinate and adds it to the player board
      //first: check if direction + ship type are selected
      //then, checks if the ship fits according to direction + ship
      //creates an obj with the coordinates, then updates the store
      //the data is cleared for next selection
      shipSorter: (id, section) => {
        if (getStore().direction != null && getStore().ship != null) {
          if (!getActions().shipFit(id, section)) {
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
