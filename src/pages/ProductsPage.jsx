import { useContext, useState, useEffect } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";

function ProductsPage() {
  const {products, filteredProducts, setFilteredProducts, filterProducts, currentFilter, setCurrentFilter, handleFilter}  = useContext(ProductContext)
  
  useEffect(() => {
    filterProducts(currentFilter)
  },[currentFilter])
 
  return (
    <div className="pt-16">
      <section className="py-16 px-16">
        <div  className='flex gap-x-2 w-full justify-center mb-16'>
          <button onClick={() => setCurrentFilter('all')} className={`font-semibold py-2 px-4 border  rounded shadow  active:translate-y-1 transition-all ${currentFilter === 'all' ? 'bg-zinc-800 text-white border-zinc-800' : 'bg-white  text-gray-800 border-gray-400 hover:bg-gray-100'}`}>All</button>

          <button onClick={() => setCurrentFilter("men's clothing")} className={`font-semibold py-2 px-4 border  rounded shadow  active:translate-y-1 transition-all ${currentFilter === "men's clothing" ? 'bg-zinc-800 text-white border-zinc-800' : 'bg-white  text-gray-800 border-gray-400 hover:bg-gray-100'}`}>Men</button>
          
          <button onClick={() => setCurrentFilter("women's clothing")} className={`font-semibold py-2 px-4 border  rounded shadow  active:translate-y-1 transition-all ${currentFilter === "women's clothing" ? 'bg-zinc-800 text-white border-zinc-800' : 'bg-white  text-gray-800 border-gray-400 hover:bg-gray-100'}`}>Women</button>

          <button onClick={() => setCurrentFilter('jewelery')} className={`font-semibold py-2 px-4 border  rounded shadow  active:translate-y-1 transition-all ${currentFilter === 'jewelery' ? 'bg-zinc-800 text-white border-zinc-800' : 'bg-white  text-gray-800 border-gray-400 hover:bg-gray-100'}`}>Jewelry</button>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[30px] mx-auto max-w-sm md:max-w-none">
          {filteredProducts.map((product) => {
            return <Product key={product.id} product={product}/>
          })}
        </div>
      </section>
      
    </div>
    
  );
}

export default ProductsPage;