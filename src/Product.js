import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id, Title, image, rating, price}) {
  const [{}, dispatch] = useStateValue();

    const addToBasket=() =>{
        dispatch({
          type:"ADD_TO_BASKET",
          item:{
            id:id,
            Title:Title,
            image:image,
            rating:rating,
            price:price,
          },
        })
    };
    return (
    <div className="product">
        <div className="product__container" >
        <p>{Title}</p>
        <div className ="product__price">
           <small>$</small>
        <strong>{price}</strong>
        <div className = "product__rating">
              { Array(rating)
                  .fill()
                  .map((_) => (
                     <p>⭐</p>
                  ))
              }
            </div>
          </div>

        </div>
      

          <img src ={image} alt="" />
          <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
