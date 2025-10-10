import React from "react"
import HomeImage from "@/assets/images/home.png"
import Image from "next/image"

const Home = () => {
  return (
    <section>
      <div className='p-5 '>
        <div className='h-[calc(100vh-40px)] rounded-xl overflow-hidden'>
          <Image
            src={HomeImage}
            alt='Home Image'
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Home
