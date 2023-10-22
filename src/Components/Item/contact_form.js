import React from "react"

const contactForm = (props) => {
    return(
       
       
      <div class="container mx-auto my-20 w-1/3 border border-white bg-green-700 opacity-90  h-[679px]">
      <div class = "p-5 space-y-5 shadow-x1">
          <p class =" text-left text-white text-3xl font-extrabold font-['Inter']"> Be come our sponsors</p>
          <p class=" text-white text-sm font-medium font-['Inter']">Please become a part of us, join hands in building a loving community.
               <br/>Submit your information in this below form to start new journey. </p>
          <form>
              <div class="grid grid-cols-2 gap-5 ">
                  <textarea
                   cols="10"
                   rows="5"
                   class="text-white border border-white bg-transparent px-3 py-2.5 font-sans text-sm font-normal placeholder-white col-span-2"
                   placeholder="Write your message..."></textarea>
                   <input
                   class=" text-white peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal placeholder-white"
                   placeholder="Name "
                 />
                 <input
                 class=" text-white peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal placeholder-white"
                   placeholder="Email"
                 />
                 <select class=" text-white peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                  <option class = "text-black"value="brazil">Brazil</option>
                  <option class = "text-black"value="bucharest">Bucharest</option>
                  <option class = "text-black"value="london">London</option>
                  <option class = "text-black"value="washington">Washington</option>
                 </select>
                 <input type='file' class=" text-white peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-white focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                 placeholder="Upload your CV" />
                 
              </div>
          </form>
          <button class="rounded-full place-items-end  px-4 py-2 bg-white">Join Now</button>
        </div>
      </div>
      
      
  
    )
}

export default contactForm