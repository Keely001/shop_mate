import "./ProductCard.css";
import { add, remove} from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const {id, name, price, image} = product;
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList)
  const [isItRemove, setRemove] = useState(false)

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id);

    if (productIsInCart){
      setRemove(true)
    }
    else{
      setRemove(false)
    }

  }, [id, cartList,setRemove])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isItRemove? <button className="remove" onClick={() => dispatch(remove(product))}>Remove</button> : <button onClick={() => dispatch(add(product))}>Add To Cart</button>}
      </div>
    </div>
  )
}
