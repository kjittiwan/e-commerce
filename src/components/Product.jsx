import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { CartContext } from "../contexts/CartContext";

function Product({product }) {
  const { id, image, price, title, category } = product
  const { addToCart } = useContext(CartContext)
  const fixCategoryTypo = (category) => {
    if (category !== 'jewelery') return category
    return 'jewelry'
  }
  return (
    <div>
      <div className="  h-[300px] border group transition mb-2">
        <div className=' w-full h-full flex justify-center items-center relative overflow-hidden'>
          <Link to={`/product/${id}`}>
            <img className='max-h-[160px] max-w-[160px] group-hover:scale-110 transition duration-300' src={image} alt={title} />
          </Link>
          <div className="absolute top-6 -right-11 group-hover:right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all">
            <button>
              <div className="bg-zinc-900 flex justify-center items-center h-12 w-12 border-b drop-shadow-lg hover:scale-110 transition active:translate-y-1">
                <BsPlus onClick={() => addToCart(product, id)} className='text-3xl text-white'/>
              </div>
            </button>
            <Link to={`/product/${id}`}>
              <div className="bg-white flex justify-center items-center h-12 w-12 border-b drop-shadow-lg hover:scale-110 transition active:translate-y-1 ">
                <BsEyeFill className='text-xl'/>
              </div>
            </Link> 
          </div>
        </div>
      </div>
      <div>
        <div className="mb-1 text-gray-500 text-sm capitalize">{fixCategoryTypo(category)}</div>
        <Link to={`/product/${id}`} >
          <div className='font-semibold mb-1 line-clamp-2'>{title}</div>
          <div className="font-bold">$ {price}</div>
        </Link>
        
      </div>
    </div>
  );
}

export default Product;