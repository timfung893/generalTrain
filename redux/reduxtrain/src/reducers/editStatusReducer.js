const editInitialState = true;
const editStatusReducer = (state = editInitialState, action) => {
  switch (action.type) {
    case "CHANGE_EDIT_STATUS":
      return !state;
    default:
      return state;
  }
};
export default editStatusReducer;
