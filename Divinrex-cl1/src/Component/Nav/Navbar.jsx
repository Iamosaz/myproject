import { IoSearch } from "react-icons/io5";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-[4rem] bg-[#B74C4C6B] 
'>
       <div>
         <h1 className='font-[pattaya] ml-[1] text-black'>
          {/* Uamesha Ramanay */}
          <img src={logo} alt="" className='font-[400] text-[48px] leading-[66.61px] sm:text-[18px] md:text-[22px]'/>
         </h1>
       </div>
       <ul className='hidden md:flex mr-[20px] text-white items-center gap-[4rem] text-[20px]'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li className='hidden md:flex text-[20px]' >
         <IoSearch className=' font-bold  text-white  text-[26px]'/>
       </li> 
       </ul>
       
    </div>
  )
}

export default Navbar
