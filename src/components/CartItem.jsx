import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io'

function CartItem({product }) {
  const { addToCart, decreaseAmount, removeFromCart} = useContext(CartContext)
  const { id, image, title, price, amount } = product
  return (
    <div className=" border-b pt-6 pb-6">
      <div className=" w-full h-full flex justify-between items-center">
          <Link to={`/product/${id}`} className="">
            <img className="max-w-[80px] max-h-[100px] mr-4 hover:scale-110 transition active:translate-y-1" src={image} alt={title} />
          </Link>
          <div className="w-full h-full">
            <div className="flex justify-between w-full">
              <Link to={`/product/${id}`} className=" text-sm uppercase font-medium max-w-[240px] hover:underline mb-2">
                {title}
              </Link>
              <div onClick={() => removeFromCart(id)} className="font-semibold hover:scale-110 transition active:translate-y-1 text-lg ">
                <IoMdClose />
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-x-4 border px-3 max-w-[100px]">
                <button onClick={() => decreaseAmount(id)} className="flex items-center cursor-pointer hover:scale-125 transition active:translate-y-1">
                  <IoMdRemove />
                </button>
                <div className="flex items-center">
                  {amount}
                </div>
                <button onClick={() => addToCart(product, id)} className="flex items-center cursor-pointer hover:scale-125 transition active:translate-y-1">
                  <IoMdAdd />
                </button>
              </div>  
              <div className="text-sm text-gray-500">$ {price}</div>
              <div className="font-medium">$ {parseFloat(amount * price).toFixed(2)}</div>
            </div>
          </div>
          

        
        
      </div>
    </div>
  );
}

export default CartItem;