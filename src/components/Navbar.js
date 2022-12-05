import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between bg-neutral-400 items-center h-24 max-w-[100vw] mx-auto px-4 sm:text-black text-white'>
      <h1 className='w-full text-3xl font-bold text-[#010403]'>FINCLVR</h1>
      <ul className='hidden md:flex cursor-pointer'>
        <li className='p-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-140 hover:font-bold hover:underline'>About</li>
        <li className='p-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-140 hover:font-bold hover:underline'>Speakers</li>
        <li className='p-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-140 hover:font-bold hover:underline'>Topics</li>
        <li className='p-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-140 hover:font-bold hover:underline'>Contact</li>
        <div className='justify-center flex'><button className='bg-transparent text-black font-bold py-2 px-4 rounded-full border-black border-2'>Register</button></div>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose color='black' size={20} /> : <AiOutlineMenu color='black' size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#fcfcfc] m-4'>FINCLVR</h1>
        <li className='p-4 border-b border-gray-700'>About</li>
        <li className='p-4 border-b border-gray-700'>Speakers</li>
        <li className='p-4 border-b border-gray-700'>Topics</li>
        <li className='p-4'>Contact</li>
        <button className='p-3 border-b m-2 border-gray-200 font-bold text-black rounded-2xl bg-neutral-400'>Register</button>
      </ul>
    </div>
  );
};

export default Navbar;