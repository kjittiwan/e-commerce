import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io"
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
function Sidebar() {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext)
  const { cart, cartAmount } = useContext(CartContext)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full bg-white fixed top-0 shadow-2xl md:max-w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-scroll`}>
      <div className="flex justify-between pt-4 pb-4 border-b">
        <div className="font-semibold">Shopping cart (<span className="">{cartAmount}</span>)</div>
        <div onClick={handleClose}  className='text-2xl font-light cursor-pointer hover:scale-125 transition active:translate-y-1 '>
        <IoMdArrowForward/>
        </div>
      </div>
      <div className="w-full h-full">
        {cart.map((product) => {
          return < CartItem product={product} />
        })}
      </div>
    </div>
  );
}

export default Sidebar;