"use client"
import Image from "next/image"
import { CTAButton } from "."

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover")

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 h-screen bg-center bg-photo bg-cover">
      <div className="pt-32 flex-1 xl:flex-none xl:w-2/4 md:flex-none md:w-3/5  sm:px-16 px-6 leading-snug ">
        <h1 className="xl:text-[72px] sm:text-[64px] md:text-[60px] text-[60px]  font-extrabold text-white">
          Choose, drive, experience — quickly and easily!
        </h1>
        <p className="text-[27px] text-white font-light mt-5">
          Our effortless booking process it's where every drive begins.
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-gray-400 blur  w-[140px] rounded-full"></div>
          <CTAButton
            title="Explore Cars"
            containerStyles="bg-primary-gold  hover:border-none text-white rounded-full mt-10 hover:bg-opacity-50 ease-out transition duration-300"
            handleClick={handleScroll}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
