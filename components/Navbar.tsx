import Link from "next/link"
import Image from "next/image"
import { CTAButton } from "."

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className=" mx-auto flex justify-between items-center sm:px-16 px-6 py-4 border-b border-gray">
        <Link
          href="/"
          className="flex justify-center items-center cursor-pointer hover:scale-110 transition ease-in "
        >
          <Image
            src="/logo2.svg"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />

          <p className="text-xl font-bold text-white">FleetRent</p>
        </Link>
        <CTAButton
          title="Sign in"
          type="button"
          containerStyles="text-primary-blue hover:bg-opacity-50 ease-out hover:text-white transition duration-300 rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  )
}

export default Navbar
