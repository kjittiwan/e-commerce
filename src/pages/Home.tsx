import { useContext, useState } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";

function Home() {
  const products = useContext(ProductContext)
  return (
    <div className="py-16 px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-auto max-w-sm md:max-w-none">
        {products.map((product: object) => {
          return <Product key={product.id} product={product}/>
        })}
      </div>
    </div>
    
  );
}

export default Home;