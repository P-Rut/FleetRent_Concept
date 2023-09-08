"use client"

import { CarProps } from "@/types"
import React from "react"
import Image from "next/image"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { generateCarImg } from "@/utils"

interface CarDetailsProps {
  isOpen: boolean
  close: () => void
  car: CarProps
}

const CarDetails = ({ isOpen, close, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="oacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="oacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative flex-col sm:flex-row flex w-full sm:w-[full] h-[620px] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all py-5 gap-5 px-5 sm:py-10">
                  <button
                    type="button"
                    onClick={close}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-gray-100 hover:scale-110 hover:opacity-50 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex flex-1 gap-2">
                    <div className="relative w-full sm:h-full h-40 rounded-lg">
                      <h2 className="font-semibold text-xl capitalize">
                        {car.make} {car.model}
                      </h2>
                      <Image
                        src={generateCarImg(car)}
                        alt="car"
                        fill
                        priority
                        className="object-contain mt-8"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="mt-5 flex flex-wrap ">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-1 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-gray-90 capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold capitalize">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-5 mt-2">
                      <div className="relative flex items-center justify-center h-20 w-full bg-gray-100 rounded-lg">
                        <Image
                          src={generateCarImg(car, "29")}
                          alt="car"
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                      <div className="relative flex justify-center items-center h-20 w-full bg-gray-100 rounded-lg">
                        <Image
                          src={generateCarImg(car, "5")}
                          alt="car"
                          height={150}
                          width={150}
                          className="object-contain"
                        />
                      </div>
                      <div className="relative flex justify-center items-center h-20 w-full bg-gray-100 rounded-lg ">
                        <Image
                          src={generateCarImg(car, "13")}
                          alt="car"
                          height={150}
                          width={150}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails
