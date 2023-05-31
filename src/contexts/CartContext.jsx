import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cartAmount, setCartAmount] = useState(0)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    getCartAmount()
    getTotal()
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (cartItem?.amount === 1) {
      removeFromCart(id) 
    }
  }
  const getCartAmount = () => {
    const currentAmount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount
    },0)
    setCartAmount(currentAmount)
  }
  const getTotal = () => {
    const currentTotal = cart.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.price * currentItem.amount)
    }, 0)
    setTotal(currentTotal)
  }
  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider value={{cart, cartAmount, total, addToCart, removeFromCart, decreaseAmount, clearCart}}>{ children }</CartContext.Provider>
  )
}

export default CartProvider