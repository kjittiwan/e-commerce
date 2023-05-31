import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io"
function AboutSection() {
  return (
    <div className=" pb-24 pt-12 gap-y-2 flex flex-col bg-[#faf4ee] ">
        <div className="flex flex-col justify-center items-center bg-[#f9f7f4] self-center px-10 py-6 rounded-lg ">
          <div className="capitalize text-[40px] md:text-[50px] font-light">
            What we do
          </div>
          <div className="text-md md:text-xl w-full  md:w-[55%] font-light  text-center">
          Cleo is a gender neutral clothing brand that celebrates <span className='font-semibold'>self-expression</span> and <span className='font-semibold'>individuality</span>. Our brand was founded on the belief that fashion should not be limited by traditional gender norms.<span className="inline md:hidden"> We believe that everyone should have access to high-quality, stylish clothing that reflects their <span className="font-semibold">unique personality</span>.</span>
          </div>
          <Link to={'/about'} className='uppercase font-semibold  hover:scale-105 flex items-center w-fit border-b-2 border-black self-center text-md md:hidden mt-4'>
                <div className=''>Learn more</div>
                <IoMdArrowForward className='ml-1' />
          </Link> 
        </div>
        <div className="  items-start  py-12 px-24 justify-center h-[700px]  gap-x-24 hidden md:flex">
          <div className="h-full w-[35%] flex flex-col gap-y-10">
            <div className="bg-sit bg-cover bg-center h-[60%] flex-1">
            </div>
            <div className="text-xl font-light w-[75%] text-center self-center">
              We believe that everyone should have access to high-quality, stylish clothing that reflects their <span className='font-semibold'>unique personality</span>.
            </div>
            <Link to={'/about'} className='uppercase font-semibold  hover:scale-105 flex items-center w-fit border-b-2 border-black self-center text-xl'>
                <div className=''>Learn more</div>
                <IoMdArrowForward className='ml-2' />
            </Link>   
          </div>

          <div className=" mt-16 bg-stand bg-cover bg-center  h-full w-[40%]"></div>
        </div>
      </div>
  );
}

export default AboutSection;