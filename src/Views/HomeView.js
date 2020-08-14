import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {listItems} from "../actions/itemActions";
import { useDispatch, useSelector } from "react-redux";

const HomeView = (props) => {
  const itemList = useSelector(state => state.itemList);
  const { items, loading, error } = itemList;
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(listItems());
}, [])


  return (
    loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
    <ul className="items">
      {items.map((p, index) => (
        <li key={index}>
          <div className="item">
            <Link to={`/item/${p.id}`}>
              {" "}
              <img
                className="item-image"
                src={require("../assets/dress.jpg")}
                alt="jersey-shirt-dress-maroon"
              />
            </Link>
            <div className="item-name">
              <Link to={`/item/${p.id}`}>{p.name}</Link>
            </div>
            <div className="item-brand">{p.brand}</div>
            <div className="item-price">€ {p.price}</div>
            <div className="item-rating">
              <small>
                {p.rating} Stars ({p.numReviews} Reviews)
              </small>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeView;
