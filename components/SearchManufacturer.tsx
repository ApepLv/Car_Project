"use client"


import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useState } from 'react';

import Image from "next/image";


const SearchManufacturer = ({manufacturer,setManufacturer} : SearchManufacturerProps) => {
  const [query, SetQuery] = useState('');

  const filteredManufacturers = query === "" 
  ?manufacturers
  : manufacturers.filter((item) => (
    item.toLowerCase()
    .replace(/\s+/g,"")
    .includes(query.toLowerCase().replace(/\s+/g,"")
  )));

  return (
    <div className="search-manufacturer">
        <Combobox>
            <div className="relative w-full">
              <Combobox.Button className="absoulute top-
              [14px]">
                <Image 
                src="/car-logo.svg"
                width={20}
                height={20}
                className="ml-4"
                alt="Car Logo"
                />
              </Combobox.Button>
                <Combobox.Input
                displayValue={(manufacturer:string) => manufacturer}
                placeholder="Volkswagen"
                className="search-manufaturer__input"
                onChange={(e) => SetQuery(e.target.value)}
                />

          <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => SetQuery ('')}
          >
            <Combobox.Options>

            </Combobox.Options>

          </Transition>

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer