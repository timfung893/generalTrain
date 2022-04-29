import charReducer from "./reducers/charReducer";
import editStatusReducer from "./reducers/editStatusReducer";

var redux = require("redux");
var oldState = {
  characters: ["kenshin", "Songoku"],
  editStatus: true,
};

var reducer1 = (state = oldState, action) => {
  switch (action.type) {
    case "CHANGE_EDIT_STATUS":
      return { ...state, editStatus: !state.editStatus };

    case "ADD_NEW":
      return { ...state, char: [...state.characters, action.newChar] };

    case "DELETE":
      return {
        ...state.char.filter((value, i) => i !== action.number),
      };

    default:
      break;
  }
  return state;
};

const allReducers = redux.combineReducers({
  characters: charReducer,
  editStatus: editStatusReducer,
});

var store1 = redux.createStore(reducer1);
store1.subscribe(() => {
  console.log("Stage changes: ", JSON.stringify(store1.getState()));
});

store1.dispatch({ type: "CHANGE_EDIT_STATUS" });
store1.dispatch({
  type: "ADD_NEW",
  newChar: "Kilin",
});

store1.dispatch({
  type: "DELETE",
  number: 0,
});

export default store1;
