import { useContext } from "react";
import { Cartcontext } from "../context/CartContext";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";


function Cart() {
    const {cartItems, removeFromCart} = useContext(Cartcontext);

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart-page">
            <Navbar page="Cart" />
            <div className="user-cart">
                {cartItems.length === 0 && <p>Cart is empty</p>}
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <p>{item.name} - ${item.price}</p>
                        <img src={item.img} alt={item.name} />
                        <button className="removeItem" onClick={() => removeFromCart(index)}>Remove</button>
                    </div>
                ))}
                {cartItems.length > 0 && <h2>Total: ${total}</h2>}
            </div>
            <Footer />
        </div>
    )
}

export default Cart;