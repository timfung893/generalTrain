import { data } from "./firebaseConnect";

var redux = require("redux");

const noteInitialState = {
  isEdit: false,
  editItem: {},
  isAdd: false,
  showNoti: false,
  notiContent:"",
  notiType:""
};

const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      data.push(action.getItem);
      return state;

    case "CHANGE_EDIT_STATUS":
      return { ...state, isEdit: !state.isEdit };

    case "CHANGE_ADD_STATUS":
      return { ...state, isAdd: !state.isAdd };

    case "GET_EDIT_DATA":
      return { ...state, editItem: action.editObject };
    // edit existing data
    case "EDIT":
      data.child(action.getItem.id).update({
        title: action.getItem.title,
        content: action.getItem.content,
      });
      console.log(
        "the data " + JSON.stringify(action.getItem) + " has been updated"
      );
      return { ...state, editItem: {} };

    case "DELETE_DATA":
      data.child(action.deleteId).remove();
      console.log(
        "the data with the id of " + action.deleteId + " has been deleted"
      );
      return state;

    case "NOTI_ON":
      return { ...state, showNoti: true, notiContent:action.notiContent, notiType:action.notiType };

    case "NOTI_OFF":
      return { ...state, showNoti: false, notiContent:action.notiContent };

    default:
      return state;
  }
};

var store = redux.createStore(allReducer);
store.subscribe(function () {
  console.log(JSON.stringify(store.getState()));
});

export default store;
