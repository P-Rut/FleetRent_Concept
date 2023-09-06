"use client"

import { CTAButtonProps } from "@/types"
import Image from "next/image"

const CTAButton = ({
  title,
  containerStyles,
  handleClick,
  type,
  textStyle,
  rightIcon,
}: CTAButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image src={rightIcon} alt="icon" fill className=" object-contain" />
        </div>
      )}
    </button>
  )
}

export default CTAButton
