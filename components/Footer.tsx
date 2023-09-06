import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black mt-10 border-t border-gray-300">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex items-center">
            <Image
              src="/logo2.svg"
              alt="logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="font-extrabold text-xl">FleetRent</p>
          </div>
          <p className="text-xs text-gray-700 ml-2">
            FleetRent 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col gap-2 text-sm min-w-[170px]"
            >
              <h3 className="font-bold">{link.title}</h3>

              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-300 sm:px-16 px-6 py-10">
        <p>@2023 FleetRent. All Rights Reserved</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
