import Logo from '../assets/signup/asset 0.png'
import Bgimg from '../assets/signup/asset 1.jpeg'  

export default function Signup() {
  return (
    <>
    <div className='h-screen flex justify-between'>
     
      <div className='text-center flex absolute '>
         <div className="grid col-span-2 ps-28 pt-16">
      <img src={Logo} alt=""/>
         </div>
     </div>

        <div className='absolute ps-36 pt-52 font-medium text-3xl'>
           <p>We Offer The Best Prodect</p>
        </div>

        <div className=''>
           <img src={Bgimg} className='h-screen' alt="" />
        </div>

      <div className='pt-60   pl-48'>
           <p className='font-bold text-3xl'>I'm New Here</p>
           <p className='text-slate-400 pt-3'>Enter your details below</p>
      
    <div className='relative mt-8'>
       <label className='absolute top-[-5px] left-[20px] bg-white text-gray-500 text-sm  '>User Name</label>
       <input  className='w-96 h-16 border mt-2 rounded-lg focus:outline-none focuse:border-blue-500 px-6 text-gray-500 text-sm type-text' placeholder='anniemario'></input>
    </div>

     <div className='relative mt-8'>   
       <label className='absolute top-[-5px] left-[20px] bg-white text-#CBD3D9    text-sm  '>Email</label>
       <input  className='w-96 h-16 border mt-2 rounded-lg focus:outline-none focuse:border-blue-500 px-6 text-gray-500 text-sm type-text' placeholder='annie@example.com'></input>
    </div>

  <div className='relative mt-8'>
       <label className='absolute top-[-5px] left-[20px] bg-white text-gray-600 text-sm  '>Password</label>
       <input  className='w-96 h-16 border mt-2 rounded-lg focus:outline-none focuse:border-blue-500 px-6 text-gray-500 text-sm type-text' placeholder=''></input>
   </div>

       <div  className='relative mt-8 ' >
         <button className='text-white bg-blue-500 rounded-lg top-[-5px] left-[20px]   pt-3 pb-3 pl-10 pr-10  text-lg font-bold  hover:'>Creat Account</button>
       </div>
  </div>
   
      <div className='text-center'>
            <div className='pe-28 pt-16'>
                 <div className='flex'>
                     <p className='ps-28 pt-3 pr-8'>Already a Member?</p>
                     <button type='button' className='h-16 w-28 bg-pink-500 rounded-xl text-white font-bold'>Sign-In</button>
                 </div>
             </div>
        </div>
     </div>
 
    </>

  )
}



