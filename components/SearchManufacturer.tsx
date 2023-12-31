"use client"
import React from "react"
import { SearchManufacturerProps } from "../types"
import { Combobox, Transition } from "@headlessui/react"
import Image from "next/image"
import { useState, Fragment } from "react"
import { manufacturers } from "@/constants"

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [inquiry, setInquiry] = useState("")

  const filteredManufactures =
    inquiry === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(inquiry.toLowerCase().replace(/\s+/g, ""))
        )

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/model-icon.png"
              alt="car-logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Lamborghini"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setInquiry(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setInquiry("")}
          >
            <div className="absolute max-h-[250px] w-full z-20 rounded-lg overflow-y-auto bg-white">
              <Combobox.Options>
                {filteredManufactures.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-gold text-white " : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : ""
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </div>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
