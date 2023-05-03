import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsCart3 } from 'react-icons/bs'
import { CartContext } from "../contexts/CartContext";
import { Link } from "../../node_modules/react-router-dom/dist/index";
function Header() {
  const { setIsOpen } = useContext(SidebarContext)
  const { cartAmount } = useContext(CartContext)
  return (
    <div className=" flex justify-between items-center px-6 py-6 border-b drop-shadow-lg">
      <Link to={'/'}>
        <div>Header</div>
      </Link>
      <div>
        <div onClick={() => setIsOpen(true)} className='text-4xl relative hover:scale-110 transition active:translate-y-1'>
          <BsCart3 />
          <div className={`${cartAmount === 0 ? 'opacity-0' : 'opacity-100'} bg-[#FF0100] flex justify-center items-center w-5 h-5 rounded-full text-xs text-white absolute -top-2 -right-2`}>{cartAmount}</div>
          
        </div>
        
      </div>
      
    </div>
  );
}

export default Header;