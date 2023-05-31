import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsCart3 } from 'react-icons/bs'
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { HiBars3} from 'react-icons/hi2'
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
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const toggleDropDrown = () => {
    setIsDropDownOpen(prev => !prev)
  }
  return (
    <header className={` ${isSticky ? 'fixed mt-0' : 'absolute  mt-0'} bg-white  w-full z-10 transition flex  items-center px-6 md:px-12 py-6 drop-shadow-lg`}>
      <Link to={'/'} className=' text-2xl font-light  gap-x-2 hover:scale-110 active:translate-y-1 drop-shadow-sm mr-16'>
      CLEO
      </Link>
      <div className="hidden md:flex font-light  gap-x-4">
        <Link to={'/products'} onClick={() => setCurrentFilter("men's clothing")} className='hover:font-semibold'>Men</Link>
        <Link to={'/products'} onClick={() => setCurrentFilter("women's clothing")} className='hover:font-semibold'>Women</Link>
        <Link to={'/products'} onClick={() => setCurrentFilter("jewelery")} className='hover:font-semibold'>Jewelry</Link>
        <Link to={'/products'} onClick={() => setCurrentFilter("all")} className='hover:font-semibold'>All products</Link>
      </div>
      <div className="flex items-center gap-x-4 ml-auto font-light">
        <Link to={'/about'} className='hover:font-semibold'>About</Link>  
        <Link to={'/contact'} className='hover:font-semibold'>Contact</Link>
        
        <div onClick={() => setIsOpen(true)} className=' text-2xl relative hover:scale-110 transition active:translate-y-1'>
          <BsCart3 />
          <div className={`${cartAmount === 0 ? 'opacity-0' : 'opacity-100'} bg-[#FF0100] flex justify-center items-center w-3.5 h-3.5 rounded-full text-xs text-white absolute -top-1.5  -right-2`}>{cartAmount}</div>  
        </div>
        <div className="relative md:hidden">
        <div onClick={toggleDropDrown} className="text-3xl">
          <HiBars3 />
        </div>
        <div onClick={toggleDropDrown} className={`${isDropDownOpen ? 'flex' : 'hidden'} absolute right-0 flex-col gap-y-3 top-8 bg-white p-8 shadow-sm font-light text-lg`}>
          <Link to={'/products'} onClick={() => setCurrentFilter("men's clothing")} className='hover:scale-110'>Men</Link>
          <Link to={'/products'} onClick={() => setCurrentFilter("women's clothing")} className='hover:scale-110'>Women</Link>
          <Link to={'/products'} onClick={() => setCurrentFilter("jewelery")} className='hover:scale-110'>Jewelry</Link>
          <Link to={'/products'} onClick={() => setCurrentFilter("all")} className='hover:scale-110'>Products</Link>
          <Link to={'/about'} className='hover:scale-110'>About</Link>  
          <Link to={'/contact'} className='hover:scale-110'>Contact</Link>
          
        </div>
      </div>
        
      </div>
      
    </header>
  );
}

export default Header;