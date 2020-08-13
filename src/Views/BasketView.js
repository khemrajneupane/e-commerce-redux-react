import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToBasket } from '../actions/basketAction';
import Pdf from './Pdf';

const BasketView = (props) => {
  const basketItem = useSelector((state) => state.shoppingBasket);
  const { basketItems, loading, error } = basketItem;
  const itemId = props.match.params.id;
  const quantity = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
 
  useEffect(() => {
    if (itemId) {
      dispatch(addToBasket(itemId, quantity));
    }
  }, []);

 
  return <div className="basket">
  <div className="basket-list">
    <ul className="basket-list-container">
      <li>
        <h3>
          Shopping Basket View
        </h3>
        <div><Pdf /></div>
      </li>
      {
       loading ?
          <div>
           {error}
        </div>
          :
        
            <li>
              <div className="basket-image">
                <img src={basketItems.image} alt="item" />
              </div>
              <div className="basket-name">
                <div>
                  <Link to={"/item/" + basketItems.id}>
                    {basketItems.name}
                  </Link>

                </div>
                <div>
                    Quantity:
                  <select value={basketItems.quantity} onChange={(e) => dispatch(addToBasket(basketItems.id, e.target.value))}>
                  {[...Array(basketItems.stockCount)].map((a, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                    </select>
                    <button type="button" className="button" onClick={(e) =>window.alert(e.target.value)} >
                      Delete
                    </button>
                  </div>                
           
              </div>
              <div className="basket-price">
                ${basketItems.price}
              </div>
            </li>
          
      }
    </ul>
  </div>

</div>
}

export default BasketView;