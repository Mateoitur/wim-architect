import React from "react"
import LogoImage from "@/assets/images/logo.png"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import StaggeredMenu from "./ui/StaggeredMenu"

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Our Work", ariaLabel: "View our services", link: "/services" },
  { label: "Sustainable Design", ariaLabel: "Get in touch", link: "/contact" },
  {
    label: "Materials & Innovation",
    ariaLabel: "Get in touch",
    link: "/contact",
  },
  { label: "Contact Us", ariaLabel: "Get in touch", link: "/contact" },
]

const Navbar = () => {
  return (
    <header className='fixed left-5 top-5 right-5 p-10 z-20'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center text-white font-medium text-xl'>
          <Image src={LogoImage} alt='Logo Image' width={30} height={30} />
          <span>W I M</span>
        </div>

        <div className='flex md:hidden overflow-visible'>
          <StaggeredMenu
            position='right'
            items={menuItems}
            menuButtonColor='#FFFFFF'
            openMenuButtonColor='#FFFFFFdd'
            changeMenuColorOnOpen={true}
            colors={["transparent"]}
            displayItemNumbering={false}
            accentColor='#333333'
            logoUrl={LogoImage.src}
            isFixed={true}
          />
        </div>
        <div className='hidden md:flex gap-3'>
          <Link href='/'>
            <Button>Home</Button>
          </Link>
          <Link href='/about'>
            <Button>About</Button>
          </Link>
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
