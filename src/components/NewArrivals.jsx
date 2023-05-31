import { IoMdArrowForward } from "react-icons/io"
import { Link } from "react-router-dom";
function NewArrivals() {
  return (
    <div>
        <div className='bg-[#faf4ee] flex flex-col items-center py-24 gap-y-8'>
          <div className="text-[40px] px-20   md:text-[40px]  uppercase  font-semibold">
            new arrivals
          </div>
          <div className="flex w-[80%] md:w-[60%] h-[400px] gap-x-2 drop-shadow-lg">
            <div className=" bg-coat bg-cover  w-[45%] relative group">
              <Link to={'/product/17'} className="bg-black bg-opacity-60 absolute bottom-0 h-[60px] w-full text-white text-sm md:text-xl font-light flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div>$ 39.99</div>
                <div className="flex items-center gap-x-2">
                  Buy now
                < IoMdArrowForward className='text-xl md:text-2xl'/>
                </div>
              </Link>
            </div>
            <div className="flex flex-col flex-1 gap-y-2 ">
                <div className="bg-bag bg-cover bg-center flex-1 relative group ">
                <Link to={'/product/1'} className="bg-black bg-opacity-60 absolute bottom-0 h-[60px] w-full text-white text-md md:text-xl font-light flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div>$ 39.99</div>
                  <div className="flex items-center gap-x-2">
                    Buy now
                  < IoMdArrowForward className='text-2xl'/>
                  </div>
                </Link>
              </div>
              <div className="bg-jacket bg-cover bg-center flex-1 relative group">
                <Link to={'/product/16'} className="bg-black bg-opacity-60 absolute bottom-0 h-[60px] w-full text-white text-md md:text-xl font-light flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=''>$ 39.99</div>
                  <div className="flex items-center gap-x-2">
                    Buy now
                  < IoMdArrowForward className='text-xl md:text-2xl'/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default NewArrivals;