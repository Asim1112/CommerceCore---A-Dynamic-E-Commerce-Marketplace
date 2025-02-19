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
<p className="font-Helvetica Neue text-gray-900 font-medium text-xs md:leading-[12px] lg:leading-[16px] mt-2 sm:text-sm md:text-base lg:text-base">Hello Nike App</p>
  <p className="text-[8px] leading-tight break-words md:leading-[24px] text-gray-900 font-light sm:text-[9px] md:text-[11px] lg:text-[13px]">Download the app to access everything Nike.
    <span className="underline text-gray-900 font-medium pl-1"><a href="#" className="text-black
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
      <p className="font-[Helvetica Neue] text-[11px] leading-tight my-1 font-medium lg:leading-[24px] md:leading-[20px] sm:text-[13px] md:text-[15px] lg:text-[17px]">First Look</p>
    </div>
    <div className="flex justify-center text-center">
      <p className="font-[Helvetica Neue] text-[22px] font-medium leading-[22px] lg:leading-[60px] md:leading-[46px] sm:leading-[36px] sm:text-[32px] md:text-[44px] lg:text-[56px]">NIKE AIR MAX PULSE</p>
    </div>
    <div className="w-full flex flex-col text-[9px] py-2 lg:text-[15px] md:text-[13px] sm:text-[11px] justify-center items-center font-[Helvetica Neue] font-light lg:leading-[24px] md:leading-[20px] md:py-3 sm:py-3 lg:py-4">
  <p className="flex items-center">
    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max pulse
  </p>
  <p>
    — designed to push you past your limits and help you go to the max.
  </p>
</div>
          <div className="flex justify-center gap-1 sm:gap-2 md:gap-3">
            <Button className="rounded-full mt-6 w-[110px] h-[32px] sm:w-[120px] sm:h-[38px] md:w-[130px] md:h-[42px] lg:w-[140px] lg:h-[45px] text-xs sm:text-sm md:text-base font-[200] lg:text-[15px]">
              Notify Me
            </Button>
            <Button className="rounded-full mt-6 w-[110px] h-[32px] sm:w-[120px] sm:h-[38px] md:w-[130px] md:h-[42px] lg:w-[140px] lg:h-[45px] text-xs sm:text-sm md:text-base font-[200] lg:text-[15px]">
              Shop Air Max
            </Button>
          </div>
  </div>
  </div>



{/* HERO SECTION 2 */}



<div className='max-w-[1440px] w-full h-auto flex justify-between flex-wrap px-1 items-center md:px-10 md:flex-nowrap mb-2'>
            
<div className='font-[Helvetica Neue] text-[15px] sm:text-[20px] md:text-[22px] leading-[28px] font-medium'>
        <h3>Best of Air Max</h3>
</div>
        
  <div className='flex gap-1 md:gap-3 mb-3'>
    <p className='pt-3 pr-2 leading-[24px] text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[Helvetica Neue] font-medium'>Shop</p>
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
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-medium md:leading-[24px] sm:leading-[20px]">Nike Air Max Pulse</p>
      <p className="font-[Helvetica Neue] pr-5 text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-medium md:leading-[24px] sm:leading-[20px]">₹ 13 995</p>
              </div>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] md:leading-[24px] sm:leading-[20px] font-light text-gray-500">
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
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-medium md:leading-[24px] sm:leading-[20px]">Nike Air Max Pulse</p>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-medium md:leading-[24px] sm:leading-[20px] pr-5">₹ 13 995</p>
              </div>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] md:leading-[24px] sm:leading-[20px] font-light text-gray-500">
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
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-medium md:leading-[24px] sm:leading-[20px]">Nike Air Max 97 SE</p>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] font-medium md:leading-[24px] sm:leading-[20px]  pr-5">₹ 16 995</p>
              </div>
      <p className="font-[Helvetica Neue] text-[11px] leading-[16px] sm:text-[13px] md:text-[15px] md:leading-[24px] sm:leading-[20px] font-light text-gray-500">
      Men&apos;s Shoes</p>
      </div>
</div>
</div>

            
            
            
            
{/* HERO-SECTION 4 */}


<div className='max-w-[1440px] w-full mx-auto flex justify-center '>
<div className="lg:mt-32 md:mt-28 mt-16">
<div className='font-medium font-[Helvetica Neue] h-[48px] lg:text-[23px] md:text-[21px] text-[18px]'>Featured</div>
<Image src="/running-man.svg" alt="running man image" width={1344} height={977} />
</div>
    </div>

<div className="max-w-[1440px] w-full flex flex-col items-center mt-14 mx-auto px-6 lg:px-10 md:px-8">
<h1 className="lg:text-[54px] md:text-[42px] sm:text-[38px] text-[32px] font-medium lg:leading-[60px] md:leading-[48px] sm:leading-[42px] leading-[40px] font-[Helvetica Neue]">STEP INTO WHAT FEELS GOOD</h1>
<p className="lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] lg:leading-[24px] md:leading-[22px] sm:leading-[20px] leading-18px font-light mt-6">Cause everyone should know the feeling of running in that
   perfect pair.</p>
<Button className="rounded-full mt-6 w-[110px] h-[32px] lg:w-[140px] lg:h-[45px] md:w-[130px] md:h-[42px] sm:w-[120px] sm:h-[38px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] font-[200]">Find Your Shoe</Button>
</div>










{/* HERO-SECTION 5 */}


<div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mt-12">
      {/* Title Section */}
      <div className="mt-6 text-[23px] font-medium font-[Helvetica Neue]">Gear Up</div>
      
      {/* Shop Buttons */}
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center mt-8 gap-6">
        {/* Shop Men's */}
        <div className="flex items-center gap-4">
          <p className="text-[15px] font-[400]">Shop Men&apos;s</p>
          <div className="flex gap-2">
            <button className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] bg-gray-100 rounded-full flex items-center justify-center">
              <FaChevronLeft color='silver' className='w-[10] h-[10]'/>
            </button>
            <button className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] bg-gray-200 rounded-full flex items-center justify-center">
              <FaChevronRight className='w-[10] h-[20]'/>
            </button>
          </div>
        </div>

        {/* Shop Women's */}
        <div className="flex items-center gap-4">
          <p className="text-[15px] font-[400]">Shop Women&apos;s</p>
          <div className="flex gap-2">
            <button className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] bg-gray-100 rounded-full flex items-center justify-center">
              <FaChevronLeft color='silver' className='w-[10] h-[20]'/>
            </button>
            <button className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] bg-gray-200 rounded-full flex items-center justify-center">
              <FaChevronRight className='w-[10] h-[20]'/>
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div>
          <Image src="/person-1.svg" alt="Nike Dri-FIT ADV TechKnit Ultra" width={300} height={300} className="w-full" />
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="font-[Helvetica Neue] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[10px] font-medium lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px]">Nike Dri-FIT ADV TechKnit Ultra</p>
              <span className="font-[Helvetica Neue] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[10px] font-medium lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px]">₹ 3,895</span>
            </div>
            <p className="font-[Helvetica Neue] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[10px] font-light lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px] text-gray-500">Men&apos;s Short-Sleeve</p><p className="font-[Helvetica Neue] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[10px] font-light lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px] text-gray-500">Running Top</p>
          </div>
        </div>
        <div>
          <Image src="/person-2.svg" alt="Nike Dri-FIT Challenger" width={300} height={300} className="w-full" />
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="font-[Helvetica Neue] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[10px] font-medium lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px]">Nike Dri-FIT Challenger</p>
              <span className="font-[Helvetica Neue] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[10px] font-medium lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px]">₹ 2,495</span>
            </div>
            <p className="font-[Helvetica Neue] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[10px] font-light lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px] text-gray-500">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
          </div>
        </div>
        <div>
          <Image src="/person-3.svg" alt="Nike Dri-FIT ADV Run Division" width={300} height={300} className="w-full" />
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="font-[Helvetica Neue] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[10px] font-medium lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px]">Nike Dri-FIT ADV Run Division</p>
              <span className="font-[Helvetica Neue] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[10px] font-medium lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px]">₹ 5,295</span>
            </div>
            <p className="font-[Helvetica Neue] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[10px] font-light lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px] text-gray-500">Women&apos;s Long-Sleeve</p><p className="font-[Helvetica Neue] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[10px] font-light lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px] text-gray-500">Running Top</p>
          </div>
        </div>
        <div>
          <Image src="/person-4.svg" alt="Nike Fast" width={300} height={300} className="w-full" />
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="font-[Helvetica Neue] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[10px] font-medium lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px]">Nike Fast</p>
              <span className="font-[Helvetica Neue] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[10px] font-medium lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px]">₹ 3,795</span>
            </div>
            <p className="font-[Helvetica Neue] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[10px] font-light lg:leading-[24px] md:leading-[20px] sm:leading-[18px] leading-[15px] text-gray-500">Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets</p>
          </div>
        </div>
      </div>
    </div>












{/* HERO SECTION 6 */}


<div className='max-w-[1440px] w-full mx-auto lg:px-2 md:px-4 px-6 flex justify-center'>
<div className="lg:mt-32 md:mt-28 mt-16">
<div className='font-medium font-[Helvetica Neue] h-[48px] lg:text-[23px] md:text-[21px] sm:text-[19px] text-[17px]'>Don&apos;t Miss</div>
<Image src="/dont miss.svg" width={1344} height={977} alt="dont miss image" />
</div>
</div>

<div className="max-w-[1440px] w-full mx-auto flex flex-col items-center lg:mt-14 md:mt-12 mt-8">
    <h1 className="lg:text-[54px] md:text-[48px] sm:text-[44px] text-[36px] font-medium lg:leading-[60px] md:leading-[54px] leading-[44px] font-[Helvetica Neue]">FLIGHT ESSENTIALS</h1>
    <p className="lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] lg:leading-[24px] md:leading-[22px] sm:leading-[20px] leading-[18px] font-light lg:mt-6 mt-3">Your built-to-last, all-week wears—but with style
        only Jordan Brand can deliver.</p>
    <Button className="rounded-full lg:mt-6 mt-3 w-[45px] h-[26px] lg:w-[80px] lg:h-[40px] md:w-[70px] md:h-[35px] sm:w-[60px] sm:h-[30px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] font-[200]">Shop</Button>
</div>






{/* HERO SECTION 7 */}


<div className="mt-6 px-4 md:px-10">
  {/* <!-- Section Title --> */}
  <div className="mt-10">
    <h2 className="font-medium font-[Helvetica Neue] text-[23px] md:text-[28px] leading-[28px]">
      The Essentials
    </h2>
  </div>

  {/* <!-- Responsive Grid Layout --> */}
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
    {/* <!-- Men's Section --> */}
    <div className="relative flex flex-col items-center">
      <Image src="/Essential-3.svg" className="w-full max-w-[440px] h-auto" alt="Essential Image-1" />
      <button className="absolute bottom-8 md:bottom-10 md:left-12 bg-white md:px-4 md:py-2 px-3 py-2 md:text-[14px] sm:text-[12px] text-[10px] font-[200] rounded-full shadow-lg">
        Men's
      </button>
    </div>

    {/* <!-- Women's Section --> */}
    <div className="relative flex flex-col items-center">
      <Image src="/Essential-1.svg" className="w-full max-w-[440px] h-auto" alt="Essential Image-2" />
      <button className="absolute bottom-8 md:bottom-10 md:left-12 bg-white font-[200] md:px-4 md:py-2 px-3 py-2 md:text-[14px] sm:text-[12px] text-[10px] rounded-full shadow-lg">
        Women&apos;s
      </button>
    </div>

    {/* <!-- Kids' Section --> */}
    <div className="relative flex flex-col items-center">
      <Image src="/Essential-2.svg" className="w-full max-w-[440px] h-auto" alt="Essential Image-3" />
      <button className="absolute bottom-8 md:bottom-10 md:left-12 bg-white text-black font-[200] rounded-full md:px-4 md:py-2 px-3 py-2 md:text-[14px] sm:text-[12px] text-[10px] shadow-lg">
        Kids&apos;
      </button>
    </div>
  </div>
</div>


<div className="flex justify-center px-6 sm:px-10 my-12 pb-10">
  <div className="max-w-[880px] w-full">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
      
      {/* Icons Section */}
      <div>
        <h6 className="text-base lg:text-lg leading-[24px] font-medium">Icons</h6>
        <ul className="mt-4 space-y-4">
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base ">Air Force 1</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Huarache</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Air Max 90</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Air Max 95</a></li>
        </ul>
      </div>

      {/* Shoes Section */}
      <div>
        <h6 className="font-medium text-base lg:text-lg leading-[24px]">Shoes</h6>
        <ul className="mt-4 space-y-4">
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">All Shoes</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Custom Shoes</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Jordan Shoes</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Running Shoes</a></li>
        </ul>
      </div>

      {/* Clothing Section */}
      <div>
        <h6 className="font-medium text-base lg:text-lg leading-[24px]">Clothing</h6>
        <ul className="mt-4 space-y-4">
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">All Clothing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Modest Wear</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Hoodies & Pullovers</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Shirts & Tops</a></li>
        </ul>
      </div>

      {/* Kids' Section */}
      <div>
        <h6 className="font-medium text-base lg:text-lg leading-[24px]">Kids&apos;</h6>
        <ul className="mt-4 space-y-4">
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Infant & Toddler Shoes</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Kids&apos; Shoes</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Kids&apos; Jordan Shoes</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition font-light text-sm lg:text-base">Kids&apos; Basketball Shoes</a></li>
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
