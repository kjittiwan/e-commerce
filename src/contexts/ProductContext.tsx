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

  const [filteredProducts, setFilteredProducts] = useState([])
 
  
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
    <ProductContext.Provider value={{products, filteredProducts, setFilteredProducts, filterProducts}}>{ children }</ProductContext.Provider>
  )
}

export default ProductProvider