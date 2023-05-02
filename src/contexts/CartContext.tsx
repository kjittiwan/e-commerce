import { createContext, useState, useEffect } from "react";

type CartProviderProps = {
  children: React.ReactNode,
}
export const CartContext = createContext();
const CartProvider = ({ children } : CartProviderProps) => {
  const [cart, setCart] = useState([])
  const [cartAmount, setCartAmount] = useState(0)
  useEffect(() => {
    getCartAmount()
  },[cart])
  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {...item, amount: item.amount + 1}
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
  const removeFromCart = (id) => {
    const newCart = [...cart].filter(item => {
      return item.id !== id
    })
    setCart(newCart) 
  }
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1}
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount === 1) {
      removeFromCart(id) 
    }
  }
  const getCartAmount = () => {
    const currentAmount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount
    },0)
    setCartAmount(currentAmount)
  }
  return (
    <CartContext.Provider value={{cart, cartAmount, addToCart, removeFromCart, decreaseAmount}}>{ children }</CartContext.Provider>
  )
}

export default CartProvider