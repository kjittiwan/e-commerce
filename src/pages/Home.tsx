import { useContext, useState, useEffect } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import Hero from "../components/Hero";
import { IoMdArrowForward } from "react-icons/io"
import { Link } from "../../node_modules/react-router-dom/dist/index";
import NewArrivals from "../components/NewArrivals";
import AboutSection from "../components/AboutSection";
import Categories from "../components/Categories";
function Home() {
  
  
  return (
    <div>
      <Hero />
      <NewArrivals />
      <AboutSection />
      <Categories />
         
    </div>
    
  );
}

export default Home;