import React from 'react'
import { Button } from "@/components/ui/button";
import { FaChevronLeft , FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Hero = () => {
  return (
    
    
    <div>
          <Header />

      <div className="flex justify-center">
    <div className="max-w-[1440px] w-full px-4 flex flex-col">


{/* HERO SECTION 1 */}

<div className="w-full mx-auto px-4 bg-gray-100">
<div className="flex flex-col items-center justify-center">
<p className="font-Helvetica Neue text-gray-900 font-semibold text-xs md:leading-[12px] lg:leading-[16px] mt-2 sm:text-sm md:text-base lg:text-base">Hello Nike App</p>
  <p className="text-[8px] leading-tight break-words md:leading-[24px] text-gray-900 font-normal sm:text-[9px] md:text-[11px] lg:text-[13px]">Download the app to access everything Nike.
    <span className="underline text-gray-900 font-bold pl-1"><a href="#" className="text-black
      hover:text-blue-500 transition-colors duration-300">Get Your Great</a></span></p>
</div>

</div>


<div className="flex justify-center items-center w-full px-4">
    <Image 
        src="/shoe-pic1.svg"
        alt="content1-image"
        width={1344}
        height={700}
        className="w-full max-w-[1344px] h-auto object-cover"
    />
        
</div>
        
  <div className="flex justify-center">
  <div className="max-w-[1008px] w-full my-10 sm:my-16">
    <div className="flex justify-center">
      <p className="font-[Helvetica Neue] text-[11px] leading-tight my-1 font-semibold lg:leading-[24px] md:leading-[20px] sm:text-[13px] md:text-[15px] lg:text-[17px]">First Look</p>
    </div>
    <div className="flex justify-center text-center">
      <p className="font-[Helvetica Neue] text-[22px] font-semibold leading-[22px] lg:leading-[60px] md:leading-[46px] sm:leading-[36px] sm:text-[32px] md:text-[44px] lg:text-[56px]">NIKE AIR MAX PULSE</p>
    </div>
    <div className="w-full flex flex-col text-[9px] py-2 lg:text-[15px] md:text-[13px] sm:text-[11px] justify-center items-center font-[Helvetica Neue] font-normal
     lg:leading-[24px] md:leading-[20px] md:py-3 sm:py-3 lg:py-4">
  <p className="flex items-center">
    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max pulse
  </p>
  <p>
    — designed to push you past your limits and help you go to the max.
  </p>
</div>
          <div className="flex justify-center gap-1 sm:flex-row sm:gap-2 md:gap-3">
          <Button className="rounded-full sm:w-auto">Notify Me</Button>
          <Button className="rounded-full sm:w-auto">Shop Air Max</Button>
          </div>
  </div>
  </div>



{/* HERO SECTION 2 */}



<div className='max-w-[1440px] w-full h-auto flex justify-between flex-wrap px-1 items-center md:px-10 md:flex-nowrap mb-2'>
            
<div className='font-[Helvetica Neue] text-[15px] sm:text-[20px] md:text-[22px] leading-[28px] font-semibold'>
        <h3>Best of Air Max</h3>
</div>
        
  <div className='flex gap-1 md:gap-3 mb-3'>
    <p className='pt-3 pr-2 leading-[24px] text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[Helvetica Neue] font-semibold'>Shop</p>
    <button className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] bg-gray-100 rounded-[24px] flex items-center justify-center">
    <FaChevronLeft color='gray' className='w-[6px] h-[12px] sm:w-[7px] sm:h-[14px] md:w-[8px] md:h-[16px]'/>
   
    </button>
    <button className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] bg-gray-100 rounded-[24px] flex items-center justify-center">
    <FaChevronRight className='w-[6px] h-[12px] sm:w-[7px] sm:h-[14px] md:w-[8px] md:h-[16px]'/>
    </button>
  </div>
</div>


  
  
  
  {/* HERO SECTION 3 */}
  

<div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
<div className='space-y-2 md:space-y-6 sm:space-y-4'>
  <Image src="/box-shoe1.svg"
   alt="Nike Air Max Pulse" 
   width={441.36} 
   height={510.36}
   className='w-full max-w-[441.36px] h-auto object-cover'/>
      <div>
              <div className='flex justify-between'>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-semibold md:leading-[24px] sm:leading-[20px]">Nike Air Max Pulse</p>
      <p className="font-[Helvetica Neue] pr-5 text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-semibold md:leading-[24px] sm:leading-[20px]">₹ 13 995</p>
              </div>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] md:leading-[24px] sm:leading-[20px] font-medium text-gray-500">
        Women&apos;s Shoes</p>
      </div>

</div>

  
  
<div className='space-y-2 md:space-y-6 sm:space-y-4'>
  <Image src="/box-shoe2.svg" 
  alt="Nike Air Max Pulse" 
  width={441.36} 
  height={510.36}
  className='w-full max-w-[441.36px] h-auto object-cover'/>

  <div>
              <div className='flex justify-between'>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-semibold md:leading-[24px] sm:leading-[20px]">Nike Air Max Pulse</p>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-semibold md:leading-[24px] sm:leading-[20px] pr-5">₹ 13 995</p>
              </div>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] md:leading-[24px] sm:leading-[20px] font-medium text-gray-500">
        Men&apos;s Shoes</p>
      </div> 
</div>
  


<div className='space-y-2 md:space-y-6 sm:space-y-4'>
  <Image src="/box-shoe3.svg" 
  alt="Nike Air Max Pulse" 
  width={441.36} 
  height={510.36}
  className='w-full max-w-[441.36px] h-auto object-cover'/>

  <div>
              <div className='flex justify-between'>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-semibold md:leading-[24px] sm:leading-[20px]">Nike Air Max 97 SE</p>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-semibold md:leading-[24px] sm:leading-[20px]  pr-5">₹ 16 995</p>
              </div>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] md:leading-[24px] sm:leading-[20px] font-medium text-gray-500">
      Men&apos;s Shoes</p>
      </div>
</div>
</div>

            
            
            
            
{/* HERO-SECTION 4 */}


<div className='flex justify-center mt-10'>
<div className="top-[1807.36px] mt-20">
<div className='font-semibold font-[Helvetica Neue] h-[48px] text-[23px] leading-[28px]'>Featured</div>
<Image src="/running-man.svg" alt="running man image" width={1344} height={977} />
</div>
    </div>

<div className="flex flex-col items-center mt-14">
<h1 className="text-[54px] font-semibold leading-[60px] font-[Helvetica Neue]">STEP INTO WHAT FEELS GOOD</h1>
<p className="text-[15px] leading-[24px] font-medium mt-6">Cause everyone should know the feeling of running in that
   perfect pair.</p>
<Button className="rounded-full mt-6">Find Your Shoe</Button>
</div>





{/* HERO-SECTION 5 */}


<div className='flex justify-start mt-6 px-10'>
<div className="top-[1807.36px] mt-20">
<div className='font-semibold font-[Helvetica Neue] h-[48px] text-[23px] leading-[28px]'>Gear Up</div>

</div>
</div>
                            
<div className="flex justify-evenly items-center px-8">                
<div className='ml-[300px]'>                
<div className='w-[211px] h-[48px] flex justify-between items-center content-center my-4'>
<p className='px-2 text-[15px] font-semibold leading-[24px] font-[Helvetica Neue]'>Shop Men&apos;s</p>

<button className="w-[48px] h-[48px] bg-gray-100 rounded-[24px] flex items-center justify-center">
<Image src="/arrow-right.svg" alt="Left Arrow" width={6.97} height={13.93} className='w-[9.97px] h-[18.93px]'/>
</button>

<button className="w-[48px] h-[48px] bg-gray-200 rounded-[24px] flex items-center justify-center">
<Image src="/arrow-left.svg" alt="Right Arrow" width={6.97} height={13.93} className='w-[9.97px] h-[18.93px]'/>
</button>
</div>
</div>
                   
<div className='w-[237px] h-[48px] flex justify-between items-center content-center my-4 ml-[350px]'>
<p className='px-2 text-[15px] font-semibold leading-[24px] font-[Helvetica Neue]'>Shop Women&apos;s</p>

<button className="w-[48px] h-[48px] bg-gray-100 rounded-[24px] flex items-center justify-center">
<Image src="/arrow-right.svg" alt="Left Arrow" width={6.97} height={13.93} className='w-[9.97px] h-[18.93px]'/>
</button>

<button className="w-[48px] h-[48px] bg-gray-200 rounded-[24px] flex items-center justify-center">
<Image src="/arrow-left.svg" alt="Right Arrow" width={6.97} height={13.93} className='w-[9.97px] h-[18.93px]'/>
</button>
</div>
            
</div> 
    
    
<div>            
<div className="flex justify-between items-center px-20">
<div className='flex gap-3'>
<div><Image src="/person-1.svg" alt="pic1" width={300} height={300} />
    
<div>
  <div className='flex justify-between mt-6'>
  <p className="font-[Helvetica Neue] text-[15px] font-semibold leading-[24px]">Nike Dri-FIT ADV TechKnit Ultra</p>
  <span className="font-[Helvetica Neue] text-[15px] font-semibold leading-[24px]">₹ 3 895</span></div>
  <p className="font-[Helvetica Neue] text-[16px] font-medium leading-[24px] text-gray-500">Men&apos;s Short-Sleeve</p>
  <p className="font-[Helvetica Neue] text-[16px] font-medium leading-[24px] text-gray-500">Running Top</p>
</div>
</div>
        
<div><Image src="/person-2.svg" alt="pic2" width={300} height={300} />
    
  <div>
    <div className='flex justify-between mt-6'>
    <p className="font-[Helvetica Neue] text-[15px] font-semibold leading-[24px]">Nike Dri-FIT Challenger</p>
    <span className="font-[Helvetica Neue] text-[15px] font-semibold leading-[24px]">₹ 2 495</span></div>
    <p className="w-[199.78px] h-[48px] font-[Helvetica Neue] text-[16px] font-medium leading-[24px] text-gray-500">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
  </div>
</div>
        
</div>

<div className='flex gap-3'>
<div><Image src="/person-3.svg" alt="pic2" width={300} height={300} />

<div>
  <div className='flex justify-between mt-6'>
  <p className="font-[Helvetica Neue] text-[15px] font-semibold leading-[24px]">Nike Dri-FIT ADV Run Division</p>
  <span className="font-[Helvetica Neue] text-[15px] font-semibold leading-[24px]">₹ 5 295</span></div>
  <p className="font-[Helvetica Neue] text-[16px] font-medium leading-[24px] text-gray-500">Women&apos;s Long-Sleeve</p>
  <p className="font-[Helvetica Neue] text-[16px] font-medium leading-[24px] text-gray-500">Running Top</p>
</div>
</div>
    
<div><Image src="/person-4.svg" alt="pic2" width={300} height={300} />

<div>
  <div className='flex justify-between mt-6'>
  <p className="font-[Helvetica Neue] text-[15px] font-semibold leading-[24px]">Nike Fast</p>
  <span className="font-[Helvetica Neue] text-[15px] font-semibold leading-[24px]">₹ 3 795</span></div>
  <p className=" w-[224.39px] h-[28px] font-[Helvetica Neue] text-[16px] font-medium leading-[24px] text-gray-500">Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets</p>
</div>
</div>
</div>
  </div>
                
  </div>




{/* HERO SECTION 6 */}


<div className='flex justify-center mt-10'>
<div className="top-[1807.36px] mt-20">
<div className='font-semibold font-[Helvetica Neue] h-[48px] text-[23px] leading-[28px]'>Don&apos;t Miss</div>
<Image src="/dont miss.svg" width={1344} height={977} alt="dont miss image" />
</div>
</div>

<div className="flex flex-col items-center mt-14">
    <h1 className="text-[54px] font-semibold leading-[60px] font-[Helvetica Neue]">FLIGHT ESSENTIALS</h1>
    <p className="text-[15px] leading-[24px] font-medium mt-6">Your built-to-last, all-week wears—but with style
        only Jordan Brand can deliver.</p>
    <Button className="rounded-full mt-6">Shop</Button>
</div>






{/* HERO SECTION 7 */}


<div className='flex mt-6 px-10'>
<div className="top-[1807.36px] mt-10">
<div className='font-semibold font-[Helvetica Neue] h-[48px] text-[23px] leading-[28px]'>The Essentials</div>
</div>
</div>
    

<div className="flex justify betweeen px-10 gap-3">

<div className='relative'>
<Image src="/Essential-3.svg" width={440} height={5407} alt="Essential Image-1"/>
<Button className="rounded-full bg-white text-black font-medium hover:bg-white relative bottom-20 left-12">
  Men&apos;s</Button></div>

<div><Image src="/Essential-1.svg" width={440} height={5407} alt="Essential Image-2"/>
<Button className="rounded-full bg-white text-black font-medium hover:bg-white relative bottom-20 left-12">
  Women&apos;s</Button></div>

<div><Image src="/Essential-2.svg" width={440} height={5407} alt="Essential Image-3"/>
<Button className="rounded-full bg-white text-black font-medium hover:bg-white relative bottom-20 left-12">
  Kids&apos;</Button></div>
</div>

<div className='flex justify-center px-10 my-12 pb-10'>

<div className='w-[880px] h-[192px]'>
          
<div className="flex justify-between">  
  
  
  <div>
  <h6 className="font-[Helvetica Neue] font-bold text-[15px] leading-[24px]">Icons</h6>
  <ul className="mt-6">
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Air Force 1</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Huarache</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Air Max 90</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Air Max 95</a></li> 
  </ul>
  </div>

  
  <div>
  <h6 className="font-[Helvetica Neue] font-bold text-[15px] leading-[24px]">Shoes</h6>
  <ul className="mt-6">
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        All Shoes</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Custom Shoes</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Jordan Shoes</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Running Shoes</a></li>
  </ul>
  </div>

  
  <div>
  <h6 className="font-[Helvetica Neue] font-bold text-[15px] leading-[24px]">Clothing</h6>
  <ul className="mt-6">
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        All Clothing</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Modest Wear</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Hoodies & Pullovers</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Shirts & Tops</a></li>
  </ul>
  </div>

  <div>
  <h6 className="font-[Helvetica Neue] font-bold text-[14px] leading-[24px]">Kids&apos;</h6>
  <ul className="mt-6">
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Infant & Toddler Shoes</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Kids&apos; Shoes</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Kids&apos; Jordan Shoes</a></li>
    
    <li className="font-[Helvetica Neue] font-normal text-[15px] py-2 text-[rgba(117,117,117,1)] leading-[24px]">
      <a href="#" className="hover:text-blue-600 font-semibold transition-colors duration-300 ease-in-out">
        Kids&apos; Basketball Shoes</a></li>
  </ul>
  </div>


  </div>
</div>
</div>
</div>
</div>
    
    <Footer />
    </div>
  )
}

export default Hero
