import React, {useEffect} from "react"
import {Icon} from "@iconify/react"

export default function ProfileCard(props) {
  const {data, heading} = props

  let [current, setCurrent] = React.useState(0)

  const dataList = data.map((item) => (
    <div
      key={item.id}
      className="w-full rounded-3xl bg-gray-600 px-5 py-2 font-Abel transition-colors duration-500 hover:bg-primary xs:w-4/5 sm:w-3/5 md:w-1/4 md:px-8 flex flex-col justify-between"
    >
      <div>
        <div className="mx-auto mt-12 h-36 w-36 rounded-full border-2 border-black">
          <img
            src={`./images/committee/${item.img_src}`}
            className="h-full w-full rounded-full object-cover object-top"
            alt={item.name}
          />
        </div>
        <h2 className="mt-5 text-center text-3xl font-bold">{item.name}</h2>
        <h3 className="mt-2 text-center text-2xl">{item.position}</h3>
      </div>
      <div>
        <a href={item.linkedIn}>
          <button className="my-3 mt-8 w-full rounded-full bg-black py-2 font-Abel text-xl font-bold text-white hover:text-primary">
            Contact
          </button>
        </a>
      </div>
    </div>
  ))

  return (
    <div>
      <h1 className=" bg-black pt-20 text-center font-Bebas text-[5rem] text-8xl font-light uppercase text-primary">
        {heading}
      </h1>
      <div className="relative mt-8 flex items-center justify-between gap-4 xs:px-6  sm:p-10 md:mt-0 md:justify-center md:px-5 lg:px-8">
        <div className="ml-3 md:hidden">
          <Icon
            icon="ic:baseline-chevron-left"
            className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-0 text-5xl"
            color="#B69575"
            onClick={() => {
              if (current === 0) {
                current = dataList.length
              }
              setCurrent(current - 1)
            }}
          />
        </div>
        {/* All Profile Cards */}
        <div className="relative flex w-full justify-center md:hidden">
          {dataList[current]}
        </div>
        <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-4 lg:mx-auto lg:w-[90%] lg:gap-8">
          {dataList}
        </div>
        <div className="mr-3 md:hidden">
          <Icon
            icon="ic:baseline-chevron-right"
            color="#B69575"
            className="cursor-pointer rounded-full bg-secondary-15 p-1 pr-0 text-5xl"
            onClick={() => {
              if (current === dataList.length - 1) {
                current = -1
              }
              setCurrent(current + 1)
            }}
          />
        </div>
      </div>
    </div>
  )
}
