import React from 'react'

const Hero = () => {
  return (
    <div className='mt-10'>
      <h3 className='font-bold text-xl sm:text-3xl text-center mt-12'>LIVE WEBINAR • 5 NOV 2035 | 6PM</h3>
      <h2 className='font-bold text-3xl font-serif sm:text-8xl my-8 text-center'>The Tools You Need <br /> for Smarter Finances</h2>
      <div className='justify-center my-5 flex'><button className='bg-transparent text-black font-bold py-2 px-4 rounded-full border-black border-2'>Register Now</button></div>
      <div className='justify-center flex my-5'>
      <img src={'https://i.ibb.co/gdJvhS9/image1.png'} className='w-[100vw] sm:w-[80vw] mt-5' alt="Image1" />
      </div>
    </div>
  )
}

export default Hero