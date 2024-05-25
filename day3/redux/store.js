const { createStore } = require("redux"); // Correctly import from 'redux'

const dispatchFn = (state = 20, action) => {
    switch (action.type) {
        case "change":
            console.log(state, "old state, action fired ");
            return action.value;
        case "inc":
            console.log(state, "old state, action inc ");
            return state + 1;
        case "dec":
            console.log(state, "old state, action dec ");
            return state - 1;
        default:
            return 69;
    }
};

export const ageStore = createStore(dispatchFn); // Create the store with the reducer
