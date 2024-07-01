import React from 'react'
import img from '../../assets/servicesimg.png'
import img1 from '../../assets/serviceimg.png'
import apple from '../../assets/apple.png'

const ServicePackage = () => {
  return (
    <section className='w-[90%] mx-[4%] my-[40px]'>
      <article className='flex items-center gap-[4rem]'>
        {/* left */}
        <div className='my-[40px] border-5 border-[#B74C4C6B] rounded-sm '>
          <img src={img} alt='' className='h-[40vh] border-[30px]  border-[#B74C4C6B] '/>
        </div>
        {/* right */}
        <div className='ml-[50px] flex-col gap-8'>
        <div className='flex gap-4 gap-[50px] leading-[3rem]'><h4 className='font-[700] text-[24px] space-x-9'>Service Packages</h4> <a className='bg-[#B74C4C6B] text-white flex justify-center items-center text-[24px] leading-6  px-[10px]  font-bold  rounded-[10px] w-[6vw] text-center tracking-[3px]' href='/'>View</a></div>
          <p className='py-10 font-semibold w-[40vw] leading-[3rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias ipsa excepturi voluptates consequuntur tempore laudantium quam vero atque eum cumque iusto velit soluta quisquam reiciendis quis nam dolores perspiciatis sapiente aperiam temporibus ab, consectetur sequi eos. Autem mollitia, molestiae qui debitis tempora adipisci natus non placeat aliquid nesciunt eaque.</p>
        </div>
      </article>
      

      {/* second */}
      <article className='flex justify-center items-center gap-[150px] my-[50px]'>
        {/* left */}
        
        <div className=' items-center'>
           <div className='flex gap-4 gap-[50px] leading-[3rem]'><h4  className='font-[700] text-[24px] space-x-9'>Service Packages</h4> <a a className='bg-[#B74C4C6B] text-white flex justify-center items-center text-[24px] leading-6  px-[10px]  font-bold  rounded-[10px] w-[6vw] text-center tracking-[3px]' href='/'>View</a></div>
           <p className='py-10 font-semibold w-[40vw] leading-[3rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias ipsa excepturi voluptates consequuntur tempore laudantium quam vero atque eum cumque iusto velit soluta quisquam reiciendis quis nam dolores perspiciatis sapiente aperiam temporibus ab, consectetur sequi eos. Autem mollitia, molestiae qui debitis tempora adipisci natus non placeat aliquid nesciunt eaque.</p>
        </div>

        {/* right */}
        <div className='border-2 border-[#B74C4C6B] rounded-sm'>
          <img src={img1} alt='' className='h-[40vh] border-[50px]  border-[#B74C4C6B] '/>
        </div>
      </article>

        {/* bottom */}
        <article className='flex items-center gap-[4rem]'>
        {/* left */}
        <div className='my-[40px] border-5 border-[#B74C4C6B] rounded-sm '>
          <img src={apple} alt='' className='h-[40vh] border-[30px]  border-[#B74C4C6B] '/>
        </div>
        {/* right */}
        <div className='ml-[50px] flex-col gap-8'>
        <div className='flex gap-4 gap-[50px] leading-[3rem]'><h4 className='font-[700] text-[24px] space-x-9'>Service Packages</h4> <a className='bg-[#B74C4C6B] text-white flex justify-center items-center text-[24px] leading-6  px-[10px]  font-bold  rounded-[10px] w-[6vw] text-center tracking-[3px]' href='/'>View</a></div>
          <p className='py-10 font-semibold w-[40vw] leading-[3rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias ipsa excepturi voluptates consequuntur tempore laudantium quam vero atque eum cumque iusto velit soluta quisquam reiciendis quis nam dolores perspiciatis sapiente aperiam temporibus ab, consectetur sequi eos. Autem mollitia, molestiae qui debitis tempora adipisci natus non placeat aliquid nesciunt eaque.</p>
        </div>
      </article>

    </section>
  )
}

export default ServicePackage
