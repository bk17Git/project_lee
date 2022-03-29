import React from 'react'
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
   
<footer class="bg-green-500 mb-0 w-full ">
    <div class="max-w-screen-xl mx-auto px-4">
        <div class="text-center name text-white font-bold pt-4 sm:pt-4 flex items-center justify-center">
            Author - Shatabdi Kakoty -<a href="https://www.linkedin.com/in/shatabdi-kakoty-content-writer/" target="_blank" class="text-white transition-colors duration-200" rel='noreferrer'>
                <AiFillLinkedin fontSize={30}/>
            </a>
        </div>
        {/* <div class="pt-4 flex max-w-xs mx-auto items-center justify-center">
            
            <a href="/" class="text-white transition-colors duration-200">
                <AiFillInstagram fontSize={30}/>
            </a>
            <p  class="text-white text-3xl mx-1 transition-colors duration-200">
                |
            </p>
            <a href="/" class="text-white transition-colors duration-200">
                <AiFillLinkedin fontSize={30}/>
            </a>
        </div> */}
        <div class="text-center text-gray-500 font-bold dark:text-gray-200 pb-4 pt-4 sm:pt-4 flex items-center justify-center">
        {" "}© 2022 | Review-2-Shop | All rights reserved.{" "}
        </div>
    </div>
</footer>

  )
}

export default Footer