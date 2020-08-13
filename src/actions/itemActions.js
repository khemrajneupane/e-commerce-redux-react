import itemService from "../services/items";
import ActionTypes from "../constants/itemConstants";
const listItems = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.ITEM_LIST_REQUEST });
    const items = await itemService.getAll();
    dispatch({ type: ActionTypes.ITEM_LIST_OK, payload: items });
  } catch (error) {
    dispatch({ type: ActionTypes.ITEM_LIST_X, payload: error.message });
  }
};

export { listItems };
