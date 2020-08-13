import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSelector, useDispatch } from "react-redux";
import { itemDetailAction } from "../actions/itemDetailAction";

const ItemsView = (props) => {
  const [quantity, setQuantity] = useState(1);

  const itemDetailList = useSelector((state) => state.itemDetailList);

  const { item, loading, error } = itemDetailList;
  console.log(item)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemDetailAction(props.match.params.id));
  }, []);
  /**handleAddToBasket is a function just to redirect user to a new URL with given parameters */
  const handleAddToBasket = () => {
    props.history.push(
      "/basket/" + props.match.params.id + "?quantity=" + quantity
    );
  };

  return (
    <div>
      <div className="back-btn">
        <Link to="/">
          <ArrowBackIcon /> Back home
        </Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={item.image} alt="item"></img>
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{item.name}</h4>
              </li>
              <li>
                {item.rating} Stars ({item.numReviews} Reviews)
              </li>
              <li>
                Price: <strong>€{item.price}</strong>
              </li>
              <li>
                Description:
                <div>{item.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price: {item.price}</li>
              <li>Status: {item.stockCount ? "Available in stock" : "Out of Stock !!"}</li>
              
              <li>
                Quantity:{" "}
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(item.stockCount)].map((a, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {item.stockCount > 0 && <button onClick={handleAddToBasket} className="button primary">
                  Add to Cart
                </button>
                }
                
              </li>
              <li>{!item.stockCount ? (<Link to ="/">Back to Item Lists</Link>): false}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsView;
