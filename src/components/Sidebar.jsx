import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io"
import { BsTrash } from 'react-icons/bs'
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, cartAmount, total, clearCart } = useContext(CartContext)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-[100vw] h-[100vh] bg-white fixed top-0 shadow-2xl md:max-w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] flex flex-col`}>
      <div className="flex justify-between py-4 border-b">
        <div className="font-semibold uppercase">Shopping cart (<span className="">{cartAmount}</span>)</div>
        <div onClick={handleClose}  className='text-2xl font-light cursor-pointer hover:scale-125 transition active:translate-y-1 '>
        <IoMdArrowForward/>
        </div>
      </div>
      <div className="w-full flex flex-col overflow-y-auto overflow-x-hidden gap-y-2 h-[65%] border-b">
        {cart.map((product) => {
          return < CartItem key={product.id} product={product} />
        })}
      </div>
      <div className="flex flex-col gap-y-3 flex-1 justify-center ">
        <div className="flex justify-between w-full items-center">
          <div className="font-semibold uppercase">
            Subtotal: <span className=" ml-2">$ {parseFloat(total).toFixed(2)}</span>
          </div>
          <button onClick={clearCart} className="h-[36px] w-[36px] flex items-center justify-center text-xl text-white bg-red-500">
            <BsTrash />
          </button>
        </div>
        <Link to={'/'} onClick={handleClose} className='bg-gray-300 py-3 rounded-sm flex justify-center items-center font-semibold text-lg'>Continue shopping</Link>
        <Link to={'/'} onClick={handleClose} className='bg-black text-white py-3 rounded-sm flex justify-center items-center font-semibold text-lg'>Checkout</Link>

      </div>
      
    </div>
  );
}

export default Sidebar;