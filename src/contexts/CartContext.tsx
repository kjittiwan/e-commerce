import { createContext, useState, useEffect } from "react";

type CartProviderProps = {
  children: React.ReactNode,
}
export const CartContext = createContext();
const CartProvider = ({ children } : CartProviderProps) => {
  const [cart, setCart] = useState([])
  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return ({...item, amount: item.amount + 1})
        } else {
          return item
        }   
      })
      setCart(newCart)
    } else {
      setCart(prevCart => {
        return [...prevCart, {...product, amount: 1}]
      })
    }
  }

  return (
    <CartContext.Provider value={{cart, addToCart}}>{ children }</CartContext.Provider>
  )
}

export default CartProvider