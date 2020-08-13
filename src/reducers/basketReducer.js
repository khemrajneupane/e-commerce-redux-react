import ActionTypes from "../constants/itemConstants";

const basketReducer = (state = {basketItems:[]}, action) => {
  
  switch (action.type) {

    case ActionTypes.BASKET_ADD_ITEM_REQ:
      return { loading: true };

    case ActionTypes.BASKET_ADD_ITEM_OK:
      return {loading:false, basketItems:action.payload}
  
    case ActionTypes.BASKET_ADD_ITEM_X:
      return {loading: false, error: action.payload}  
    default:
      return state;
  }
};
export default basketReducer;
