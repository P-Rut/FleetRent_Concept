"use client"
import Image from "next/image"
import SearchManufacturer from "./SearchManufacturer"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBTN = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type="submit"
    className={`-ml-10 z-10 rounded-full group hover:opacity-50 duration-300 bg-primary-gold p-[12px] ${otherClasses}`}
  >
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={25}
      height={25}
      className="object-contain group-hover:duration-300 group-hover:scale-125"
    />
  </button>
)

const Search = ({ setManufacturer, setModel }: any) => {
  const [searchManufacturer, setSearchManufacturer] = useState("")
  const [searchModel, setSearchModel] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill in the search bar")
    }
    setModel(searchModel)
    setManufacturer(searchManufacturer)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />

        <div className="searchbar__item">
          <input
            type="text"
            name="model"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            placeholder="Huracan..."
            className="searchbar__input "
          />
          <SearchBTN otherClasses="sm:p-0 sm:bg-light-white" />
        </div>
      </div>
    </form>
  )
}

export default Search
