import itemService from "../services/items";
import ActionTypes from "../constants/itemConstants";
import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/items'

const addToBasket = (itemId, quantity) => async (dispatch) => {
  try {
    //const { data } = await axios.get(`${baseUrl}/${itemId}`);
    const  data  = await itemService.getById(itemId);
    //console.log(data)
 
    dispatch({ type: ActionTypes.BASKET_ADD_ITEM_REQ });
    dispatch({ type: ActionTypes.BASKET_ADD_ITEM_OK,
        payload:data,quantity});
 
  } catch (error) {
    dispatch({ type: ActionTypes.BASKET_ADD_ITEM_X, payload: error.message });
  }
};

export { addToBasket };