import React from 'react'
import miBanner from '../assets/bannerx.jpg'
export const Banner = ({text}) => {
  return (
    <div  className={`w-auto h-44 bg-center bg-no-repeat bg-cover flex justify-center items-center flex-col`} style={{     
      opacity: 0.75,
      backgroundImage: `url(${miBanner})`
    }} >
      <h1 className='text-cyan-50 font-bold text-7xl text-center'>{text}</h1>
      
    </div>
  )
}
