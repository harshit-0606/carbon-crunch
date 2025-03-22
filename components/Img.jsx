import React from 'react'
import Image from 'next/image'
function Img() {
  return (
    <div className="flex justify-center items-center w-full">
    <Image 
      src="/image.png" 
      alt="My Image" 
      width={1440} 
      height={700} 
      className="rounded-3xl w-[98%] max-w-[1400px] h-auto mt-[50px]"
    />
  </div>
  )
}

export default Img
