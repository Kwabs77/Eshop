import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import {sliderData} from './Slider-data.js';
import { current } from '@reduxjs/toolkit';
const Slider = () => {

    const [curentSlide, setCurrentSlide] =useState(0)
    const slideLength= sliderData.length-1
    const nextSlide=()=>{
         if(curentSlide!==slideLength){
            setCurrentSlide(curentSlide+1)
         }
    }

    const prevSlide =()=>{
            if(curentSlide!==0){
              setCurrentSlide(curentSlide-1)
            }
    }
  

    const autoScroll = true;
    let slideInterval;
    let intervalTime=5000;

    useEffect(()=>{
      setCurrentSlide(0)
    },[])

    function auto (){

      slideInterval = setInterval( nextSlide,intervalTime)
    }

 useEffect(()=>{
   if(autoScroll){
    auto()
   }

   return ()=> clearInterval(slideInterval)
 },[curentSlide])

  return (
    <div>
       <AiOutlineArrowLeft className='absolute top-1/2 z-10 border-2 border-orangeRed bg-transparent rounded-full 
       text-white cursor-pointer hover:border-white' onClick={prevSlide}/> 
       <AiOutlineArrowRight className='absolute top-1/2 right-2 z-10 border-2 border-orangeRed bg-transparent rounded-full 
       text-white cursor-pointer hover:border-white' onClick={nextSlide}/> 
        {sliderData.map((slide,index)=>{
          const {image, desc, heading } = slide 
          return(<div  key={index} className={index===curentSlide?"relative w-screen top-0 left-0 transition delay-80 translate-x--1/2 opacitity-100 ":
          'relative w-screen top-0 left-0  translate-x-1/2 opacitity-0'}>
                           
                           {index === curentSlide && (
                            <>
                             <img  src={image} alt=''/>
                             <div className='absolute text-center  bg-blacktransp p-6 text-white top-[15rem]
                              m-auto left-[40%]    animate-slideup '>
                                <h2  className='text-4xl'>
                                 
                                    {heading}
                                </h2>
                                <p2>
                                    {desc}
                                </p2>
                                <hr/>
                                <a className='' href='#product'>
                                    <button className='bg-orangeRed mt-6 px-4 rounded-xl'>Shop</button> 
                                </a>
                             </div>
                            </>
                           )}
             </div>
          )
        })}
       
    </div>
  )
}

export default Slider