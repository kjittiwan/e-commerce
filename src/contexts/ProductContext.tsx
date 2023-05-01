import { createContext, useState, useEffect } from "react";

type ProductProviderProps = {
  children: React.ReactNode,
}
export const ProductContext = createContext();

const ProductProvider = ({ children } : ProductProviderProps) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const processedData = await data.filter((item : object) => {
        return item.category === "men's clothing" || item.category === "women's clothing"
      });
      setProducts(processedData);
    }
    fetchProducts()
  }, [])
  
  return (
    <ProductContext.Provider value={products}>{ children }</ProductContext.Provider>
  )
}

export default ProductProvider