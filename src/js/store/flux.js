import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //boardGen iterates mapping
      boardGen: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      //userBoard: store for arrays representing ships and their coord
      //placements: coords for every ship
      //permitted: value to trigger the battle mode (when equals true)
      userBoard: {
        placements: { 5: [], 4: [], 3: [], 2: [] },
        permitted: null,
      },
      cpuBoard: {
        play: "",
        hits: [],
        misses: [],
        sunk: null,
      },
    },
    actions: {
      //generalHandler: adds generic key and data to store
      generalHandler: (object, data) => {
        setStore({ [`${object}`]: data });
      },
      //coordSorter: creates random CPU coordinate but checks if it's already taken first
      //if it's already taken, the function recursively calls itself
      //if not, triggers the attack function through the generated coord
      coordSorter: () => {
        const coord = `${Math.floor(Math.random() * 9 + 1)}${Math.floor(
          Math.random() * 9 + 1
        )}`;
        if (
          getStore().cpuBoard["hits"].includes(coord) ||
          getStore().cpuBoard["misses"].includes(coord)
        ) {
          console.log("already generated! trying again...");
          getActions().coordSorter();
        } else {
          const cpu = getStore().cpuBoard;
          cpu["play"] = coord;
          setStore({ cpuBoard: cpu });
          getActions().cpuAttack(coord);
        }
      },
      //cpuAttack: checks userboard using random coordinates from the CPU
      //sorts coord into hits or misses
      //if there's a hit, triggers a removal function
      cpuAttack: (coord) => {
        let player = getStore().userBoard["placements"];
        let cpu = getStore().cpuBoard;
        if (Object.values(player).flat().includes(coord)) {
          cpu["hits"].push(coord);
          setStore({ cpuBoard: cpu });
          getActions().cpuHit(coord);
        } else {
          cpu["misses"].push(coord);
          setStore({ cpuBoard: cpu });
        }
      },
      //cpuHit: removes coord from the userBoard
      //if a ship gets completely attacked, sends a message
      cpuHit: (coord) => {
        console.log("uh oh, you got hit");
        const keys = Object.keys(getStore().userBoard["placements"]);
        let attacked = getStore().userBoard["placements"];
        for (let key of keys) {
          if (attacked[key].includes(coord)) {
            if (attacked[key].length == 1) {
              let cpu = getStore().cpuBoard;
              cpu["sunk"] = key;
              console.log(`your ${key} just sunked!`);
              setStore({ cpuBoard: cpu });
            }
            attacked[key] = attacked[key].filter((el) => el != coord);
            const updated = { placements: attacked, permitted: true };
            setStore({ userBoard: updated });
          }
        }
      },
      //reset: clears the whole player board
      reset: () => {
        setStore({ userBoard: {} });
        setStore({ direction: null });
        setStore({ ship: null });
        return console.log("changes cleared");
      },
      //numToAlpha: transforms a number into a letter for row coordinates display purposes
      //only used on the boards' text
      numToAlpha: (number) => {
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        const naturals = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
      //validate: checks if every ship has been selected in the board
      //permitted is used to grant access to the battle view
      validate: () => {
        const ships = Object.values(getStore().userBoard["placements"]);
        if (ships.flat().length == 14) {
          const base = getStore().userBoard;
          base["permitted"] = true;
          setStore({ userBoard: base });
          console.log("ready to go!");
        } else {
          console.log("ships missing...");
        }
      },
      //shipSorter: receives a coordinate and adds it to the player board
      //first: check if direction + ship type are selected
      //then, checks if the ship fits according to direction + ship
      //creates an obj "ship type" : array with coord, then updates the store
      //the data is cleared for next selection
      //triggers the validate function to check if selection is finished
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
            getActions().validate();
          }
        } else {
          console.log("pick ship and direction first!");
        }
      },
    },
  };
};

export default getState;
