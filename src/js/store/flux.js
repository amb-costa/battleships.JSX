import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //boardGen iterates mapping
      boardGen: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      //userBoard: store for arrays representing ships and their coord
      userBoard: {
        placements: { 5: [], 4: [], 3: [], 2: [] },
        hits: [],
        misses: [],
      },
      cpuBoard: [],
    },
    actions: {
      //generalHandler: adds generic key and data to store
      generalHandler: (object, data) => {
        setStore({ [`${object}`]: data });
      },
      //coordGenerator: creates random CPU coordinate but checks if it's already taken first
      coordGenerator: () => {
        const coord = `${Math.floor(Math.random() * 9 + 1)}${Math.floor(
          Math.random() * 9 + 1
        )}`;
        if (getStore().cpuBoard.includes(coord)) {
          console.log("already generated! trying again...");
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
      //numToAlpha: transforms a number into a letter for row coordinates display purposes
      numToAlpha: (number) => {
        let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        let naturals = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        return alphabet[naturals.indexOf(number)];
      },
      //shipFit: does the ship fit the grid on the selected tile?
      //direction: horizontal, vertical
      //ship: integer from 2 to 5
      shipFit: (row, column) => {
        if (getStore().direction == "horizontal") {
          if (parseInt(column) + parseInt(getStore().ship) > 10) return false;
          else return true;
        } else if (getStore().direction == "vertical") {
          if (parseInt(row) + parseInt(getStore().ship) > 10) return false;
          else return true;
        }
      },
      //shipSorter: receives a coordinate and adds it to the player board
      //first: check if direction + ship type are selected
      //then, checks if the ship fits according to direction + ship
      //creates an obj with the coordinates, then updates the store
      //the data is cleared for next selection
      shipSorter: (row, column) => {
        if (getStore().direction != null && getStore().ship != null) {
          if (!getActions().shipFit(row, column)) {
            console.log("not enough space to fit!");
          } else {
            let finPick = [];
            for (let i = 0; i < parseInt(getStore().ship); i++) {
              if (getStore().direction == "horizontal") {
                finPick.push(`${parseInt(row)}${parseInt(column) + i}`);
              } else {
                finPick.push(`${parseInt(row) + i}${parseInt(column)}`);
              }
            }
            let updating = getStore().userBoard["placements"];
            const selected = Object.values(updating);
            if (!finPick.some((el) => selected.flat().includes(el))) {
              const newShip = { [getStore().ship]: finPick };
              updating = { ...updating, ...newShip };
              setStore({
                userBoard: { placements: updating },
                direction: null,
                ship: null,
              });
              console.log("clean slate, ready for next step");
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
