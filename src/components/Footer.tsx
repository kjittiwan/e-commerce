import { BsInstagram, BsLine, BsFacebook } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { Link } from '../../node_modules/react-router-dom/dist/index';
function Footer() {
  return (
    <footer className="bg-zinc-900 py-10 relative bottom-0 text-white">
      <div className="container mx-auto flex justify-around">
        <div className='flex flex-col gap-y-2'>
          <div className="text-3xl font-light">CLEO</div>
          <div className="w-[300px] font-light">
            Celebrate your unique style and express yourself with Cleo's diverse range of clothing. Shop now!
          </div>
          <div className='flex gap-x-8 text-2xl text-white py-3'>
            <div className='cursor-pointer'> <FiPhoneCall /> </div>
            <div className='cursor-pointer'> <BsFacebook /> </div>
            <div className='cursor-pointer'> <BsInstagram/> </div>
            <div className='cursor-pointer'> <BsLine /> </div>
          </div>
          <div>Privacy policy | &copy; 2023 CLEO </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          <h2 className='font-semibold'>About Us</h2>
          <Link to={'/about'} className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>our story</Link>
          <p className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>join our team</p>
          <p className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>cleo group</p>
          <p className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>cleo club</p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <h2 className='font-semibold'>Customer Service</h2>
          <Link to={'/contact'} className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>contact us</Link>
          <p className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>FAQs</p>
          <p className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>size guide</p>
          <p className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>store locator</p>
          <p className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>returns & exchanges</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;