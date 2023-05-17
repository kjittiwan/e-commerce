import { createContext, useState, useEffect } from "react";

type CartProviderProps = {
  children: React.ReactNode
}
type CartContext = {
  cart: CartType[]
  cartAmount: number
  total: number
  addToCart: (product: CartType, id: number) => void
  removeFromCart: (id: number) => void
  decreaseAmount: (id: number) => void
  getCartAmount: () => void
  getTotal: () => void
  clearCart: () => void
}
type CartType = {
  category: string
  description: string
  id: number
  image: string
  price: number
  title: string
  amount: number
}

export const CartContext = createContext({} as CartContext);
const CartProvider = ({ children } : CartProviderProps) => {
  const [cart, setCart] = useState<CartType[]>([])
  const [cartAmount, setCartAmount] = useState(0)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    getCartAmount()
    getTotal()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cart])
  const addToCart = (product : CartType, id : number) => {
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
  const removeFromCart = (id : number) => {
    const newCart = [...cart].filter(item => {
      return item.id !== id
    })
    setCart(newCart) 
  }
  const decreaseAmount = (id : number) => {
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