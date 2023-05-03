import { createContext, useState, useEffect } from "react";

type ProductProviderProps = {
  children: React.ReactNode,
}
type Products = {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  title: string,
}[]

export const ProductContext = createContext([]);

const ProductProvider = ({ children } : ProductProviderProps) => {
  const [products, setProducts] = useState<Products>([]);
  useEffect (() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const processedData = await data.filter((item) => {
        return item.category !== "electronics"
      });
      setProducts(processedData);
    }
    fetchProducts()
  }, [])
  
  return (
    <ProductContext.Provider value={{products}}>{ children }</ProductContext.Provider>
  )
}

export default ProductProvider