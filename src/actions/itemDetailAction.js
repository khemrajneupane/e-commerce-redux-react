import itemService from "../services/items";
import ActionTypes from "../constants/itemConstants";
const itemDetailAction = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.ITEM_DETAIL_REQUEST });
    const item = await itemService.getById(itemId);
   

    dispatch({ type: ActionTypes.ITEM_DETAIL_OK, payload: item });
  } catch (error) {
    dispatch({ type: ActionTypes.ITEM_DETAIL_X, payload: error.message });
  }
};

export { itemDetailAction };
