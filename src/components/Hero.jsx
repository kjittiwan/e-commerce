import { Link } from '../../node_modules/react-router-dom/dist/index';
import { IoMdArrowForward } from "react-icons/io"
function Hero() {
  return (
    <section className="bg-[#fcf2e9] h-[600px] lg:h-[100vh] flex flex-col justify-between box-border">
      <div className='h-full  flex items-end '>
        <div  className='h-full w-[45%] flex-1 bg-hero bg-cover'>
        </div>
        <div className='flex flex-col px-10 lg:px-28 justify-center h-full w-full lg:w-[55%] pt-20  bg-hero bg-cover bg-fixed lg:bg-none'>
          <div className=''>
            <div className=' bg-white bg-opacity-60 lg:bg-[#ff7700]  lg:bg-opacity-5 p-10 flex flex-col'>
              <div className='flex items-center font-semibold uppercase justify-start'>
                <div className='w-10 h-[2px] bg-red-600 mr-3'></div>Why wait ?
              </div>
              <div className=' uppercase font-light text-[50px] lg:text-[65px] '>Discover <br/>your unique <br/><span className='font-bold'>Style</span></div>
              <Link to={'/products'} className='uppercase font-bold  hover:scale-105 flex items-center w-fit border-b-2 border-black self-end'>
                <div className=''>Shop now</div>
                <IoMdArrowForward className='ml-2' />
              </Link>        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;