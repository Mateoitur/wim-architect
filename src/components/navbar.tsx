import React from "react"
import LogoImage from "@/assets/images/logo.png"
import Image from "next/image"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <header className='fixed left-5 top-5 right-5 p-10 z-20'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center text-white font-medium text-xl'>
          <Image src={LogoImage} alt='Logo Image' width={30} height={30} />
          <span>W I M</span>
        </div>

        <div className='flex gap-3'>
          <a href=''>
            <Button>Home</Button>
          </a>
          <a href=''>
            <Button>About</Button>
          </a>
          <a href=''>
            <Button>Our Work</Button>
          </a>
          <a href=''>
            <Button>Sustainable Design</Button>
          </a>
          <a href=''>
            <Button>Materials & Innovation</Button>
          </a>
          <a href=''>
            <Button variant={"secondary"}>Contact Us</Button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
