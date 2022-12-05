import React from 'react'

const Data = () => {
  return (
    <div className='w-[100%] my-14'>
      <div className='flex flex-col sm:flex sm:flex-row p-7'>
        <div className=' sm:w-[40vw] sm:mx-24'>
          <h2 className='font-bold text-5xl mb-5 font-serif sm:text-7xl'>About the <br /> Webinar</h2>
          <p className='text-xl font-mono mb-5 sm:text-2xl'>Fintech services are revolutionizing the banking industry and the way we handle our finances.</p>
          <p className='text-xl font-mono mb-5 sm:text-2xl'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div className='justify-center flex sm:w-[40vw]'><img src="https://static.wixstatic.com/media/c837a6_3c3ac04db7f64f6a89cc4d2df3b64d6a~mv2.jpg/v1/crop/x_0,y_8,w_5831,h_3860/fill/w_618,h_406,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/AdobeStock_422965230_Retouched.jpg" className='w-[100vw] sm:w-[90vw] border-black border-4' alt="Image2" /></div>
      </div>
    </div>
  )
}

export default Data