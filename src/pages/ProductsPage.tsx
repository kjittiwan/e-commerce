import { useContext, useState, useEffect } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";

function ProductsPage() {
  const {products}  = useContext(ProductContext)
  useEffect(() => {
    setFilteredProducts([...products])
  },[products])
  const [filteredProducts, setFilteredProducts] = useState([])
  function setActiveBtn(btn) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      if (button !== btn) button.classList.remove('active');
    });
    btn.classList.add('active');
  }
  function handleClick(e) {
    if (e.target.classList.contains('active')) {
      return
    } else {
      setActiveBtn(e.target)
    }   
  }
  function filterProducts(category: string) {
    if (category === "all") {
      setFilteredProducts([...products])
    }
    else {
      const updatedProducts = [...products].filter(product => {
        return product.category === category
      })
      setFilteredProducts(updatedProducts)
    }
  }


 
  return (
    <div className="pt-16">
      <section className="py-16 px-16">
        <div onClick={handleClick} className='flex gap-x-2 w-full justify-center mb-16'>
          <button onClick={() => filterProducts("all")} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow [&.active]:bg-zinc-800 [&.active]:text-white [&.active]:border-zinc-800 active:translate-y-1 transition-all">All</button>
          <button onClick={() => filterProducts("men's clothing")} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow [&.active]:bg-zinc-800 [&.active]:text-white [&.active]:border-zinc-800 active:translate-y-1 transition-all">Men's</button>
          <button  onClick={() => filterProducts("women's clothing")} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow [&.active]:bg-zinc-800 [&.active]:text-white [&.active]:border-zinc-800 active:translate-y-1 transition-all">Women's</button>
          <button onClick={() => filterProducts("jewelery")} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow [&.active]:bg-zinc-800 [&.active]:text-white [&.active]:border-zinc-800 active:translate-y-1 transition-all">Jewelry</button>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[30px] mx-auto max-w-sm md:max-w-none">
          {filteredProducts.map((product: object) => {
            return <Product key={product.id} product={product}/>
          })}
        </div>
      </section>
      
    </div>
    
  );
}

export default ProductsPage;