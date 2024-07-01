import React from 'react'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className='grid grid-cols-2   border-[#B74C4C6B] border-[38px]'>
      
      <article className='flex flex-col gap-8 text-left justify-center  leading-[2.5rem] px-[27%] border-[30px]  border-[#B74C4C6B]  py-[20px]'>
          
      <HiOutlineArrowSmallRight className=' border-black p-1 h-12 w-12 border-[1px] text-black rounded-[50%] ml-[650px] my-[40px]'/>
        {/* <div> */}
          <div className='flex gap-10'>
            <h3 className='text-[25px]'>services package</h3>
          </div>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati minima perspiciatis sed eum est praesentium voluptate aliquam? Perferendis itaque quos a totam in quas esse atque recusandae expedita labore!</p>
        {/* </div> */}

        <a href="/ " className='px-[10px] py-[16px] w-[12vw] bg-[#B74C4C6B] text-black font-semibold rounded-[10px] text-[22px] text-center mt-[30px] mb-[50px]'>
        Contact me </a>
      </article>

      <article className='flex flex-col gap-8 text-left justify-center  leading-[2.5rem] px-[27%] border-[30px]  border-[#B74C4C6B] py-[20px] '>
        {/* <div> */}
          

            <HiOutlineArrowSmallRight className=' border-black p-1 h-12 w-12 border-[1px] text-black rounded-[50%] ml-[650px] my-[40px]'/>
          {/* </div> */}
        {/* <div> */}
          <div className='flex gap-10'>
            <h3 className='text-[25px]'>services package</h3>
          </div>
         <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati minima perspiciatis sed eum est praesentium voluptate aliquam? Perferendis itaque quos a totam in quas esse atque recusandae expedita labore!</p>
        {/* </div> */}

        <a href="/ " className='px-[10px] py-[16px] w-[12vw] bg-[#B74C4C6B] text-black font-semibold rounded-[10px] text-[22px] text-center mt-[30px] mb-[50px]'>
        Contact me </a>
      </article>
    </section>
    
  )
}

export default Contact
