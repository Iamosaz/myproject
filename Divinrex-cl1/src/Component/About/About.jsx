import React from 'react'
import about_img from '../../assets/aboutImg.png'
import { BsGoogle, BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'


const About = () => {
  return (
    <section className='bg-[#B05555] py-[20px] rounded-bl-xl'>
          <article className='flex items-center justify-evenly'>
            <img src={about_img} alt=""className='m-[60px]'/>
         <div className='flex flex-col gap-8'>
            <h1 className='ml-[150px]'>About Me</h1>
            <p className='font-light]  w-[30vleading-10 text-[22px] text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quibusdam eius provident natus aliquid itaque impedit beatae voluptatem non facere corporis nostrum quo, reprehenderit quam sapiente! Officia dolores voluptas quis.</p>
         <a href='#' className='text-black bg-[
#FFFFFF] w-[14vw] border-[2px] py-[16px] px-[26] text-center bg-white rounded-[4px] ml-[150px] text-[20px]'>Let's Chat</a>
          <div className='flex  gap-[20px] ml-[250px]'>
            <a href=''>
              <BsGoogle/>
            </a>
            <a href=''>
              <FaFacebook/>
              </a>
              <a href=''>
              <BsInstagram/>
              </a>
              <a href=''>
              <BsTwitterX/>
              </a>
          </div>
         </div>
      
          </article>
       
    </section>
  )
}

export default About
