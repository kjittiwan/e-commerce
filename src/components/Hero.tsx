import heroImg from '../images/hero.jpg'
import { Link } from '../../node_modules/react-router-dom/dist/index';
import { IoMdArrowForward } from "react-icons/io"
function Hero() {
  return (
    <section className=" bg-[#fcf2e9]  h-[100vh] flex flex-col justify-between ">
      <div className='uppercase flex justify-center items-center py-2 mb-16'>Free shipping on orders of $50+</div>
      <div className='h-full  flex items-end'>
        <div style={{backgroundImage: `url(${heroImg})`}} className='h-[100%] w-[45%] bg-cover'>
        </div>
        <div className='flex flex-col px-28 justify-start h-full w-[55%]  pt-32'>
          <div>
            <div className='flex items-center font-semibold uppercase justify-start'>
              <div className='w-10 h-[2px] bg-red-600 mr-3'></div>Why wait ?
            </div>
            <div className=' uppercase font-light text-[65px] '>Discover <br/>your unique <br/><span className='font-bold'>Style</span></div>
            <Link to={'/'} className='uppercase font-semibold  hover:scale-105 flex items-center w-fit border-b-2 border-black'>
              <div className=''>Discover more</div>
              <IoMdArrowForward className='ml-2' />
            </Link>        
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Hero;