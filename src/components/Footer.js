import React from 'react'

const Footer = () => {
  return (

    <footer class="p-4 text-black font-bold rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span class="text-sm ml-14 flex sm:font-semibold justify-centersm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">FINCLVR™</a>. All Rights Reserved.
      </span>
      <ul class="flex justify-center sm:font-semibold flex-wrap items-center mt-3 text-sm sm:mt-0">
        <li>
          <p class="mr-4 hover:underline md:mr-6 ">About</p>
        </li>
        <li>
          <p class="mr-4 hover:underline md:mr-6">Privacy Policy</p>
        </li>
        <li>
          <p class="mr-4 hover:underline md:mr-6">Licensing</p>
        </li>
        <li>
          <p class="hover:underline">Contact</p>
        </li>
      </ul>
    </footer>

  )
}

export default Footer