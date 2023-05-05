import men from '../images/men.png'
import women from '../images/women.png'
import jewelry from '../images/jewelry.png'
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { Link } from '../../node_modules/react-router-dom/dist/index';
function Categories() {
  const { setCurrentFilter }  = useContext(ProductContext)
  return (
    <div className=" pt-12 pb-20">
        <div className="flex flex-col md:flex-row gap-4 h-full w-full px-10">
          <Link to={'/products'} onClick={() => setCurrentFilter("men's clothing")} className="h-[580px] w-full md:w-1/3  text-white  font-semibold text-[50px] hover:scale-105 transition-all duration-300 relative">
            <img src={men} alt="men-category-link" className='object-cover h-full w-full' />
            <div className=" underline decoration-3 decoration underline-offset-8 absolute bottom-10 text-center w-full">MEN</div>
          </Link>
          <Link to={'/products'} onClick={() => setCurrentFilter("women's clothing")} className="h-[580px] w-full md:w-1/3  text-white  font-semibold text-[50px] hover:scale-105 transition-all duration-300 relative">
            <img src={women} alt="women-category-link" className='object-cover h-full w-full' />
            <div className=" underline decoration-3 decoration underline-offset-8 absolute bottom-10 text-center w-full">WOMEN</div>
          </Link>
          <Link to={'/products'} onClick={() => setCurrentFilter("jewelery")} className="h-[580px] w-full md:w-1/3  text-white  font-semibold text-[50px] hover:scale-105 transition-all duration-300 relative">
            <img src={jewelry} alt="jewelry-category-link" className='object-cover h-full w-full' />
            <div className=" underline decoration-3 decoration underline-offset-8 absolute bottom-10 text-center w-full">JEWELRY</div>
          </Link>
        
        </div>
      </div>
  );
}

export default Categories;