"use client"

import { CarCard, Hero, CustomFilter, Search } from "@/components"
import ShowMore from "@/components/ShowMore"
import { fuels, yearsOfProduction } from "@/constants"
import { fetchCars } from "@/utils"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")
  const [fuel, setFuel] = useState("")
  const [year, setYear] = useState(2022)
  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    setLoading(true)
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
      })
      setAllCars(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [manufacturer, model, fuel, year, limit])
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-10 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Car Catalogue</h1>
          <p className=" text-lg font-light">Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <Search setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {loading && (
          <div className="mt-16 w-full flex-center text-2xl font-bold">
            Loading...
          </div>
        )}
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">NO RESULTS</h2>
          </div>
        )}
      </div>
    </main>
  )
}
