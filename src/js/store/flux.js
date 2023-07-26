const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
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
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      pusher: (el) => {
        const stored = getStore().myList;
        stored.includes(el) ? console.log("already clicked") : stored.push(el);
        setStore({ myList: stored });
        return console.log(getStore().myList);
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
