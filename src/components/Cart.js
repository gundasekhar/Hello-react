import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart =() => {

    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
  return (
    <div className="text-center w-150 my-5 mx-auto bg-gray-100 p-5">
        <div className="flex justify-between">
        <h1 className="font-bold px-5 py-2 rounded-2xl">CART ITEMS</h1>
        {cartItems.length === 0 ? "" : <button className="bg-amber-400 px-5 py-2 rounded-2xl font-bold"
        onClick={handleClearCart}
        >ClearCart</button>}
        </div>
        {cartItems.length === 0 && <h1 className="font-semibold">Your Cart is Empty</h1>}
        <ItemList items={cartItems} />
    </div>
  )
}

export default Cart