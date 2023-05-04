import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsCart3 } from 'react-icons/bs'
import { CartContext } from "../contexts/CartContext";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import Logo from '../images/logo.png'
function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const { setIsOpen } = useContext(SidebarContext)
  const { cartAmount } = useContext(CartContext)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
      window.scrollY > 570 ? setIsSticky(true) : setIsSticky(false)
    })
  })
  return (
    <header className={` ${isSticky ? 'fixed mt-0' : 'absolute  mt-0'} bg-white  w-full z-10 transition flex justify-between items-center px-6 py-6 drop-shadow-lg`}>
      <Link to={'/'} className='flex text-2xl font-light  gap-x-2 hover:scale-110 active:translate-y-1 drop-shadow-sm items-end'>
      CLEO
      </Link>
      <div className="flex items-center gap-x-5">
        <Link to={'/products'}>Buy products</Link>
        <div onClick={() => setIsOpen(true)} className=' text-3xl relative hover:scale-110 transition active:translate-y-1'>
          <BsCart3 />
          <div className={`${cartAmount === 0 ? 'opacity-0' : 'opacity-100'} bg-[#FF0100] flex justify-center items-center w-4 h-4  rounded-full text-xs text-white absolute -top-1.5  -right-2`}>{cartAmount}</div>  
        </div>
       
        
      </div>
      
    </header>
  );
}

export default Header;