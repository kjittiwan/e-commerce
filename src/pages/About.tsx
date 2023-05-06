import ceo from '../images/ceo.png'
import cs from '../images/customer-service.jpg'

function About() {
  return (
    <div className="pt-32 bg-[#FAF4EE]">
      <div className="flex px-16 flex-1 mb-12 items-end justify-center gap-32">
        <div className="text-[50px]">
          Fashion<br/> is <span className="text-[70px] bold">universal</span>,<br/>atleast, at <span className="font-semibold italic">CLEO</span>
        </div>
        <div className="text-xl w-[35%] pb-4 font-light">Our brand is inspired by the diverse communities and cultures that make up our world. We aim to create clothing that transcends gender and cultural boundaries and celebrates the beauty and uniqueness of all individuals.</div>
      </div>
      <div className="w-full h-[500px] bg-cover bg-store"></div>
      <div className="mt-32 mb-16  h-[2px] bg-rose-500 mx-32"></div>
      <div className="flex px-16 flex-1 mb-16 items-start justify-between mx-32">
        <div className="text-[50px] font-semibold">You are what<br/>you wear</div>
        <div className="flex flex-col gap-y-6 w-[45%] pb-4">
          <div className="text-2xl font-medium">We believe that clothing is a means of self-expression and we strive to create a diverse range of garments that cater to a wide variety of tastes and styles.
          </div>
          <div className="text-xl font-light"> Our clothing is designed to be versatile and timeless, allowing individuals to mix and match pieces to create looks that are uniquely their own. Whether you're looking for a classic piece that you can wear for years to come or a statement piece that reflects your individuality and creativity, Cleo has something for every occasion. From tailored blazers to comfortable joggers, from flowing maxi dresses to edgy leather jackets, our collection offers a diverse range of styles that cater to a variety of tastes and preferences.
          </div>
       </div>
      </div>
      <div className="flex px-16 flex-1 mb-10 items-start justify-between mx-32">
        <div className='flex gap-4 pt-4'>
          <img src={ceo} alt="ceo-image" className=' w-12 h-12' />
          <div className='font-semibold'>
            Archibald Godfrey III<br/>
            <span className='text-sm font-light'>Founder & CEO</span>
          </div>
        </div>
        <div className='text-[35px] font-semibold italic w-[45%]'>
          "We are committed to creating a community that celebrates and embraces individuality and we welcome everyone to join us on this journey."
        </div>
      </div>
      <div className="mt-32 mb-16  h-[2px] bg-rose-500 mx-32"></div>
      <div className='flex mx-32 gap-x-20 mb-16'>
        <div className='flex flex-col flex-1 text-xl font-light gap-y-8'>
          <div>The CLEO family, positioned worldwide and committed to our vision of a fashion utopia.</div>
          <div className='text-[60px] font-bold'>450+ <span className='text-[30px]'>Employees</span></div>
        </div>
        <div className='flex flex-col flex-1 text-xl gap-y-8 font-light'>
          <div>A beloved brand that has withstood the test of time through the unshakable commitment to our core values.</div>
          <div className='text-[60px] font-bold'>85+ <span className='text-[30px]'>Years</span></div>
        </div>
        <div className='flex flex-col flex-1 text-xl gap-y-8 font-light'>
          <div>We are a thriving brand, but no need to take our word for it. Ask our customers.. Or take a peek at our numbers!</div>
          <div className='text-[60px] font-bold'>50K+ <span className='text-[30px]'>Sales</span></div>
        </div>
      </div>
      <div className='bg-[#ff7700] bg-opacity-5 flex px-32 py-16'>
        <div className='flex flex-col flex-1 gap-y-8'>
          <div className='font-bold text-[45px]'>Have a question?<br/>Our team is happy<br/>to assist you</div>
          <div className='text-xl w-[70%]'>Ask about CLEO products, pricing, stores, or anything else. Our highly trained reps are standing by, ready to help.</div>
          <div className='w-[70%] h-[2px] bg-red-500'></div>
          <div className='flex items-center gap-x-10'>
            <button className='bg-black text-white py-3 px-4 rounded-xl flex justify-center items-center font-semibold text-lg'>Contact us</button>
            <div className='font-semibold'>Or call <span className=' underline'>+12 3456 7890</span></div>
          </div>
        </div>
        <div className='flex-1 h-[500px] flex justify-center'>
         <img src={cs} alt="" className=' w-[70%] object-cover rounded-xl' />
        </div>
      </div>
    </div>
  );
}

export default About;