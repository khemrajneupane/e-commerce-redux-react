import ActionTypes from "../constants/itemConstants";

  const itemListReducer = (state = {items:[]}, action) => {

    switch (action.type) {
        case ActionTypes.ITEM_LIST_REQUEST:
          return { loading: true };
        case ActionTypes.ITEM_LIST_OK:
          return { loading: false, items: action.payload };
        case ActionTypes.ITEM_LIST_X:
          return { loading: false, error: action.payload }
        default:
          return state;
      }
  };
  export default itemListReducer
