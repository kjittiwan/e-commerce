import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';


function ProductDetails() {
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)
  const product = products.find((item) => item.id === parseInt(id))
  if (!product) {
    return <section>Loading...</section>
  }
  const { image, title, description, price } = product
  return (
    <div className="py-24  h-full flex justify-center items-center ">
      <div className=" flex mx-auto flex-col lg:flex-row  items-center lg:gap-x-40 pt-20">
        <div>
          <img src={image} alt={title} className='max-w-[200px]  lg:max-w-sm mb-4' />
        </div>
        <div className=" flex flex-col text-center lg:text-left gap-y-3 lg:gap-y-6 mx-auto max-w-[300px] sm-max-w-[100px] md:max-w-[400px]  lg:max-w-[450px] ">
          <h1 className="text-3xl font-medium">{title}</h1>
          <div className="text-xl font-medium text-red-500">$ {price}</div>
          <div className="text-md font-light md:max-w-[400px] lg:max-w-[550px] mb-1 ">{description}</div>
          <div className="h-full">
            <button onClick={() => addToCart(product, product.id)} className="bg-zinc-900 text-white p-3 rounded-sm font-semibold text-lg ">Add to cart</button>
          </div>    
        </div> 
      </div>
    </div>
  );
}

export default ProductDetails;