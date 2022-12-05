import React from 'react'

const Speakers = () => {
  return (
    <div className='my-10 sm:my-20'>
      <h1 className='font-bold text-center text-3xl mb-5 font-serif sm:text-6xl'>Meet the Speakers</h1>
      <div className='flex flex-col sm:flex-row'>
        <div className='w-[75vw] mx-auto text-center my-6'><img src="https://static.wixstatic.com/media/c837a6_117b7ce626234a63b41af8da0f256bd9~mv2.jpg/v1/crop/x_874,y_60,w_3441,h_3440/fill/w_455,h_455,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/AdobeStock_299042079_Desaturate.jpg" className='rounded-full border-black border-2 mx-auto' alt="Speaker1" />
          <h2 className='my-4 text-3xl font-serif font-bold sm:text-4xl'>Tony Selby</h2>
          <p className='text-base sm:text-2xl font-mono'>Marketing Manager at Finclvr</p>
          <p className='text-base sm:text-2xl font-mono underline'>LinkedIn</p>
        </div>
        <div className='w-[75vw] mx-auto text-center my-6'><img src="https://static.wixstatic.com/media/c837a6_c4d08e675c5641a28b7748f1dc91d3b2~mv2.jpg/v1/crop/x_1929,y_109,w_2268,h_2273/fill/w_455,h_455,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2580ae6fedd349a69d99a223465bf653_mv2_Retouched.jpg" className='rounded-full border-black border-2 mx-auto' alt="Speaker1" />
          <h2 className='my-4 text-3xl font-serif font-bold sm:text-4xl'>Tony Selby</h2>
          <p className='text-base sm:text-2xl font-mono'>Marketing Manager at Finclvr</p>
          <p className='text-base sm:text-2xl font-mono underline'>LinkedIn</p>
        </div>
      </div>
    </div>
  )
}

export default Speakers