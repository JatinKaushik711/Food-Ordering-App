import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items);
    
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

  return(
     <div className="text-center m-4 p-4 bg-green-100">
        <h1 className="text-2xl font-bold text-green-500">CART</h1>
        <div className="w-6/12 m-auto bg-gray-100 shadow-lg rounded-lg">
        <button className="p-2 m-2 bg-rose-200 rounded-lg shadow-md hover:bg-rose-400"
        onClick = {handleClearCart}
        >
            Clear Cart
        </button>
        {cartItems.length===0 && <h1 className="text-rose-400 m-2 p2">Your Cart is empty... Add items to your cart</h1>}
            <ItemList items={cartItems}/>
            </div>
     </div>
  );
}

export default Cart;