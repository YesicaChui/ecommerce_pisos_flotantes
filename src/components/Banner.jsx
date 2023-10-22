import React from 'react'
// import miBanner from '../../assets/bannerx.jpg'
export const Banner = ({text}) => {
  return (
    <div className="w-auto h-80 bg-center bg-no-repeat bg-cover bg-[url('./bannerx.jpg')] flex justify-center items-center flex-col" style={{
      opacity: 0.75
    }} >
      <h1 className='text-cyan-50 font-bold text-7xl'>PISOS FLOTANTES</h1>
      <h2 className='text-cyan-50 font-bold text-5xl mt-5'>{text}</h2>
    </div>
  )
}
