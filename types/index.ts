import { MouseEventHandler } from "react"

export interface CTAButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit"
  textStyle?: string
  rightIcon?: string
  isDisabled?: boolean
}

export interface SearchManufacturerProps {
  selected: string
  setSelected: (manufacturer: string) => void
}

export interface CarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface FilterProps {
  manufacturer: string
  model: string
  year: number
  fuel: string
  limit: number
}

export interface OptionProps {
  title: string
  value: string
}
export interface CustomFilterProps {
  title: string
  options: OptionProps[]
  setFilter: any
}
export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
  setLimit: any
}
