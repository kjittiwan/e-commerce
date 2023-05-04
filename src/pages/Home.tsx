import { useContext, useState, useEffect } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import Hero from "../components/Hero";
import { IoMdArrowForward } from "react-icons/io"
import { Link } from "../../node_modules/react-router-dom/dist/index";
function Home() {
  const {products}  = useContext(ProductContext)
  return (
    <div>
      <Hero />
      <div>
        <div className='bg-[#faf4ee] flex flex-col items-center py-24 gap-y-6 '>
          <div className="text-[40px]  uppercase font-light">
            This week's <span className="font-bold">newest</span> and <span className="font-bold">best selling</span> items!
          </div>
          <div className="flex w-[60%] h-[400px] gap-x-2 drop-shadow-lg">
            <div className=" bg-coat bg-cover  w-[45%] relative group">
              <div className="bg-black bg-opacity-60 absolute bottom-0 h-[60px] w-full text-white text-xl font-light flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div>$ 39.99</div>
                <Link to={'/product/17'} className="flex items-center gap-x-2">
                  Buy now
                < IoMdArrowForward className='text-2xl'/>
                </Link>
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-y-2 ">
                <div className="bg-bag bg-cover bg-center flex-1 relative group ">
                <div className="bg-black bg-opacity-60 absolute bottom-0 h-[60px] w-full text-white text-xl font-light flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div>$ 39.99</div>
                  <Link to={'/product/1'} className="flex items-center gap-x-2">
                    Buy now
                  < IoMdArrowForward className='text-2xl'/>
                  </Link>
                </div>
              </div>
              <div className="bg-jacket bg-cover bg-center flex-1 relative group">
                <div className="bg-black bg-opacity-60 absolute bottom-0 h-[60px] w-full text-white text-xl font-light flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=''>$ 39.99</div>
                  <Link to={'/product/16'} className="flex items-center gap-x-2">
                    Buy now
                  < IoMdArrowForward className='text-2xl'/>
                  </Link>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className=" pb-24 pt-12 gap-y-2 flex flex-col bg-[#faf4ee] ">
        <div className="flex flex-col justify-center items-center bg-[#f9f7f4] self-center px-10 py-6 rounded-lg ">
          <div className="capitalize text-[50px] font-light">
            What we do
          </div>
          <div className="text-xl w-[55%] font-light  text-center">
          Cleo is a gender neutral clothing brand that celebrates self-expression and individuality. Our brand was founded on the belief that fashion should not be limited by traditional gender norms. 
          </div>
        </div>
        <div className="flex  items-start  py-12 px-24 justify-center h-[700px]  gap-x-24">
          <div className="h-full w-[35%] flex flex-col gap-y-10">
            <div className="bg-sit bg-cover bg-center h-[60%] flex-1"></div>
            <div className="text-xl font-light w-[75%] text-center self-center">
              We believe that everyone should have access to high-quality, stylish clothing that reflects their unique personality.
            </div>
            <Link to={'/products'} className='uppercase font-semibold  hover:scale-105 flex items-center w-fit border-b-2 border-black self-center text-xl'>
                <div className=''>Read more</div>
                <IoMdArrowForward className='ml-2' />
            </Link>   
          </div>

          <div className=" mt-16 bg-stand bg-cover bg-center  h-full w-[40%]"></div>
        </div>
      </div>

         
    </div>
    
  );
}

export default Home;