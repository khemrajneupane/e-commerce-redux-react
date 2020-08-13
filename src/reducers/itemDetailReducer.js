import ActionTypes from "../constants/itemConstants";

  const itemDetailReducer = (state = {item:{}}, action) => {
   
    switch (action.type) {
        case ActionTypes.ITEM_DETAIL_REQUEST:
          return { loading: true };
        case ActionTypes.ITEM_DETAIL_OK:
          return { loading: false, item: action.payload };
        case ActionTypes.ITEM_DETAIL_X:
          return { loading: false, error: action.payload }
        default:
          return state;
      }
  };
  export default itemDetailReducer
