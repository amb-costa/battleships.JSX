import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //boardGen iterates mapping
      boardGen: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      //userBoard : store for arrays representing ships and their coord
      //placements = coords for every ship
      //permitted = value to trigger the battle mode (when equals true)
      userBoard: {
        placements: { 5: [], 4: [], 3: [], 2: [] },
        permitted: null,
      },
      //cpuBoard : store for CPU moves
      //play = recent CPU move
      //hits = all successful CPU attacks
      //misses = unsuccessful CPU attacks
      //sunk = last fully sunken ship
      //lives = amount of movements the CPU has (starts with 30)
      cpuBoard: {
        play: "",
        hits: [],
        misses: [],
        sunk: null,
        lives: 30,
      },
    },
    actions: {
      //generalHandler : adds generic key and data to store
      generalHandler: (object, data) => {
        setStore({ [`${object}`]: data });
      },
      //numToAlpha : transforms a number into a letter for row coordinates display purposes
      //Only used on the boards' text
      numToAlpha: (number) => {
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        const naturals = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        return alphabet[naturals.indexOf(number)];
      },
      //shipFit : does the ship fit the grid on the selected tile?
      //direction = horizontal, vertical
      //ship = integer from 2 to 5
      shipFit: (row, column) => {
        if (getStore().direction == "horizontal") {
          if (parseInt(column) + parseInt(getStore().ship) > 10) return false;
          else return true;
        } else if (getStore().direction == "vertical") {
          if (parseInt(row) + parseInt(getStore().ship) > 10) return false;
          else return true;
        }
      },
      //validate : checks if every ship has been selected in the board
      //permitted = used to grant access to battle view
      validate: () => {
        const ships = Object.values(getStore().userBoard["placements"]);
        if (ships.flat().length == 14) {
          const base = getStore().userBoard;
          base["permitted"] = true;
          setStore({ userBoard: base });
          console.log("ready to go!");
        }
      },
      //coloredShip : delivers a className for buttons according to the ship type
      //It assumes the coord belongs to a ship, so the checking is done out of the function scope
      coloredShip: (coord) => {
        if (getStore().userBoard["placements"]["5"].includes(coord)) {
          return "btn col px-0 border bg-danger bg-opacity-75 disabled";
        } else if (getStore().userBoard["placements"]["4"].includes(coord)) {
          return "btn col px-0 border bg-success bg-opacity-75 disabled";
        } else if (getStore().userBoard["placements"]["3"].includes(coord)) {
          return "btn col px-0 border bg-info bg-opacity-75 disabled";
        } else {
          return "btn col px-0 border bg-warning bg-opacity-75 disabled";
        }
      },
      //coordSorter : creates random CPU coordinate
      //If it's already taken, the function recursively calls itself
      //If not, triggers the attack function through the generated coord
      coordSorter: () => {
        const coord = `${Math.floor(Math.random() * 9 + 1)}${Math.floor(
          Math.random() * 9 + 1
        )}`;
        if (
          getStore().cpuBoard["hits"].includes(coord) ||
          getStore().cpuBoard["misses"].includes(coord)
        ) {
          getActions().coordSorter();
        } else {
          const cpu = getStore().cpuBoard;
          cpu["play"] = coord;
          setStore({ cpuBoard: cpu });
          getActions().cpuAttack(coord);
        }
      },
      //cpuAttack : checks userboard using random coordinates generated at coordSorter
      //Sorts coord into hits or misses
      //If there's a hit, the removal function is triggered
      cpuAttack: (coord) => {
        let player = getStore().userBoard["placements"];
        let cpu = getStore().cpuBoard;
        cpu["lives"] = parseInt(cpu["lives"]) - 1;
        if (Object.values(player).flat().includes(coord)) {
          cpu["hits"].push(coord);
          setStore({ cpuBoard: cpu });
          getActions().cpuHit(coord);
        } else {
          cpu["misses"].push(coord);
          setStore({ cpuBoard: cpu });
        }
      },
      //cpuHit : removes coord from the userBoard
      //If a ship gets completely attacked, cpuBoard["sunk"] is updated
      cpuHit: (coord) => {
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
      //reset : clears the whole player board + cpu board
      //Used to reset the whole game
      reset: () => {
        setStore({
          userBoard: {
            placements: { 5: [], 4: [], 3: [], 2: [] },
            permitted: null,
          },
          cpuBoard: {
            play: "",
            hits: [],
            misses: [],
            sunk: null,
            lives: 30,
          },
        });
        return console.log("changes cleared");
      },
      //shipSorter : receives a coordinate and adds it to the player board
      //First, checks if direction + ship type are selected
      //Then, checks if the ship fits according to direction + ship
      //Creates an obj {"ship type" : array with coords}, then updates the store
      //The data is cleared for next selection
      //Triggers the validate function to check if ship selection is finished
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
