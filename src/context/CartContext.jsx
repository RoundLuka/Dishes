import { createContext, useState, useEffect } from "react"

export const Cartcontext = createContext();

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems])

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item])
    }

    const removeFromCart = (index) => {
        setCartItems((prev) => prev.filter((val, i) => i != index));
    };

    return (
        <Cartcontext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </Cartcontext.Provider>
    )
}