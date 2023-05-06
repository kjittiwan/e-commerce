import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsCart3 } from 'react-icons/bs'
import { CartContext } from "../contexts/CartContext";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import { ProductContext } from "../contexts/ProductContext";
function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const { setIsOpen } = useContext(SidebarContext)
  const { cartAmount } = useContext(CartContext)
  const { setCurrentFilter } = useContext(ProductContext)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 570 ? setIsSticky(true) : setIsSticky(false)
    })
  })
  return (
    <header className={` ${isSticky ? 'fixed mt-0' : 'absolute  mt-0'} bg-white  w-full z-10 transition flex  items-center px-12 py-6 drop-shadow-lg`}>
      <Link to={'/'} className=' text-2xl font-light  gap-x-2 hover:scale-110 active:translate-y-1 drop-shadow-sm mr-16'>
      CLEO
      </Link>
      <div className="font-light flex gap-x-4">
        <Link to={'/products'} onClick={() => setCurrentFilter("men's clothing")}>Men</Link>
        <Link to={'/products'} onClick={() => setCurrentFilter("women's clothing")}>Women</Link>
        <Link to={'/products'} onClick={() => setCurrentFilter("jewelery")}>Jewelry</Link>
        <Link to={'/products'} onClick={() => setCurrentFilter("all")}>All products</Link>
      </div>
      
      <div className="flex items-center gap-x-4 ml-auto">
        <div className="font-light">Sign in</div>
        <Link to={'/about'} className='font-light' >About</Link>
        <div onClick={() => setIsOpen(true)} className=' text-2xl relative hover:scale-110 transition active:translate-y-1'>
          <BsCart3 />
          <div className={`${cartAmount === 0 ? 'opacity-0' : 'opacity-100'} bg-[#FF0100] flex justify-center items-center w-3.5 h-3.5 rounded-full text-xs text-white absolute -top-1.5  -right-2`}>{cartAmount}</div>  
        </div>
       
        
      </div>
      
    </header>
  );
}

export default Header;