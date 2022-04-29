const charInitialState = ["kenshin", "Songoku"];
const charReducer = (state = charInitialState, action) => {
  switch (action.type) {
    case "ADD_NEW":
      return [...state.characters, action.newChar];

    case "DELETE":
      return [...state.char.filter((value, i) => i !== action.number)];
    default:
      return state;
  }
};
export default charReducer;
