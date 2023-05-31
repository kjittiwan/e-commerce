import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext([]);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect (() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const processedData = await data.filter((item) => {
        return item.category !== "electronics"
      });
      setProducts(processedData);
      setFilteredProducts(processedData)
    }
    fetchProducts()
  }, [])

  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentFilter, setCurrentFilter] = useState('all')
  
  function filterProducts(category) {
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
    <ProductContext.Provider value={{products, filteredProducts, setFilteredProducts, filterProducts, currentFilter, setCurrentFilter}}>{ children }</ProductContext.Provider>
  )
}

export default ProductProvider