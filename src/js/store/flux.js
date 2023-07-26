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
      direction: "",
      ship: "",
    },
    actions: {
      pusher: (el) => {
        const stored = getStore().myList;
        stored.includes(el) ? console.log("already clicked") : stored.push(el);
        setStore({ myList: stored });
        return console.log(getStore().myList);
      },
      reset: () => {
        setStore({ myList: [] });
        setStore({ direction: "" });
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
    },
  };
};

export default getState;
