"use client"

import { SearchManufacturerProps } from "@/types"
import { Combobox } from "@headlessui/react"

const SearchManufacturer = ({manufacturer,setManufacturer} : SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">SearchManufacturer
        <Combobox>
            <div className="relative w-full">

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer