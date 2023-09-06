import { CarProps, FilterProps } from "@/types"
import { error } from "console"
import { url } from "inspector"
import { type } from "os"

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters
  const headers = {
    "X-RapidAPI-Key": "1fdef5840cmsh0e475363f6984a3p181f09jsn3129de098638",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  )

  const result = await response.json()
  return result
}

export const calculateCarRentPrice = (city_mpg: number, year: number) => {
  const basePricePerDay = 105
  const mileageFactor = 0.5
  const ageFactor = 0.5

  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export const generateCarImg = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage")

  const { make, year, model } = car

  url.searchParams.append("customer", "hrjavascript-mastery")
  url.searchParams.append("make", make)
  url.searchParams.append("modelFamily", model.split(" ")[0])
  url.searchParams.append("zoomType", "fullscreen")
  url.searchParams.append("modelYear", `${year}`)
  url.searchParams.append("angle", `${angle}`)

  return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set(type, value)

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  return newPathName
}
