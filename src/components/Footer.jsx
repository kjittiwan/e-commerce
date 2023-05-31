import { useState } from 'react';
import { BsInstagram, BsLine, BsFacebook } from 'react-icons/bs'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { FiPhoneCall } from 'react-icons/fi'
import { Link } from 'react-router-dom';

function Footer() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isServiceOpen, setIsServiceOpen] = useState(false)
  const toggleAboutOpen = () => {
    setIsAboutOpen(prev => !prev)
  }
  const toggleServiceOpen = () => {
    setIsServiceOpen(prev => !prev)
  }
  return (
    <footer className="bg-zinc-900 py-10 relative bottom-0 text-white">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-around items-center md:items-start gap-y-6">
        <div className='flex flex-col gap-y-4 md:gap-y-2 items-center md:items-start'>
          <div className="text-3xl font-light">CLEO</div>
          <div className="w-[300px] font-light text-center md:text-left">
            Celebrate your unique style and express yourself with Cleo&apos;s diverse range of clothing. Shop now!
          </div>
          <div className='flex gap-x-8 text-2xl text-white py-3'>
            <div className='cursor-pointer'> <FiPhoneCall /> </div>
            <div className='cursor-pointer'> <BsFacebook /> </div>
            <div className='cursor-pointer'> <BsInstagram/> </div>
            <div className='cursor-pointer'> <BsLine /> </div>
          </div>
          <div>Privacy policy | &copy; 2023 CLEO </div>
        </div>
        <div className='hidden md:flex flex-col gap-y-2'>
          <h2 className='font-semibold'>About Us</h2>
          <Link to={'/about'} className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>our story</Link>
          <p className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>join our team</p>
          <p className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>cleo group</p>
          <p className='text-lg font-light uppercase hover:underline underline-offset-8 cursor-pointer'>cleo club</p>
        </div>
        <div className='flex md:hidden flex-col gap-y-2 w-[45%]'>
          <div onClick={toggleAboutOpen} className='flex items-center justify-between'>
            <h2 className='font-semibold'>About Us</h2>
            <div className='text-2xl'>
              {isAboutOpen ? <BiChevronUp /> : <BiChevronDown />}
            </div>
          </div>
          <div className={`${isAboutOpen ? 'flex' : 'hidden'} text-base font-light uppercase underline-offset-8 cursor-pointer flex flex-col gap-y-2`}>
            <Link to={'/about'} className='hover:underline '>our story</Link>
            <p className='hover:underline'>join our team</p>
            <p className='hover:underline '>cleo group</p>
            <p className='hover:underline '>cleo club</p>
          </div>
        </div>

        <div className='flex md:hidden flex-col gap-y-2 w-[45%]'>
          <div onClick={toggleServiceOpen} className='flex items-center justify-between'>
            <h2 className='font-semibold'>Customer Service</h2>
            <div className='text-2xl'>
              {isServiceOpen ? <BiChevronUp /> : <BiChevronDown />}
            </div>
          </div>
          <div className={`${isServiceOpen ? 'flex' : 'hidden'} text-base font-light uppercase underline-offset-8 cursor-pointer flex-col gap-y-2`}>
            <Link to={'/contact'} className=''>contact us</Link>
            <p className='hover:underline '>faqs</p>
            <p className='hover:underline '>size guide</p>
            <p className='hover:underline '>store locator</p>
            <p className='hover:underline '>returns & exchanges</p>
          </div>
        </div>

        <div className='hidden md:flex flex-col gap-y-2'>
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