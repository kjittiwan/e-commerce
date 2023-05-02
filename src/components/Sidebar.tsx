import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io"
import { CartContext } from "../contexts/CartContext";
function Sidebar() {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext)
  const { cart } = useContext(CartContext)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full bg-white fixed top-0 shadow-2xl md:max-w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className="flex justify-between pt-4 pb-4 border-b">
        <div className="font-semibold">Shopping cart (0)</div>
        <div onClick={handleClose}  className='text-2xl font-light cursor-pointer'>
        <IoMdArrowForward/>
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return item.title
        })}
      </div>
    </div>
  );
}

export default Sidebar;