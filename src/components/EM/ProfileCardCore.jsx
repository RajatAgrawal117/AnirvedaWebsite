import {React, useState} from "react"
import {Icon} from "@iconify/react"
import img1 from "../Committee/images/barbie.jpg"
import img2 from "../Committee/images/harit.jpg"

export default function ProfileCardExec() {
  const people = [
    {
      id: 1,
      name: "Barbie Sharma",
      linkedIn: "https://www.linkedin.com/in/barbie-sharma/",
    },
    {
      id: 2,
      name: "Harit dobariya",
      linkedIn: "https://www.linkedin.com/in/harit-dobariya-600609224/",
    },
  ]

  let [current, setCurrent] = useState(0)

  const studList = people.map((people) => {
    const img_URL = [img1, img2]

    return (
      <div
        key={people.id}
        className={
          "relative w-full rounded-2xl py-8  drop-shadow-md xs:w-4/5 sm:w-[85%] xl:px-2"
        }
      >
        <section class=" h-full w-full rounded-[2rem] bg-gray-600 p-8 px-5 py-5 text-center shadow-lg duration-500 hover:bg-primary hover:text-black lg:w-full">
          <div class="ml-auto mr-auto mt-8 w-full max-w-md text-center">
            <div className="bg-grey-light mx-auto mt-6 mb-8 flex h-[8rem] w-[8rem] items-center justify-center rounded-full border-2 border-black text-center sm:h-[16rem] sm:w-[16rem] lg:h-32 lg:w-32">
              <img class="rounded-full w-full h-full object-cover" src={img_URL[people.id - 1]} />
            </div>

            <div className="mb-2 font-Abel text-2xl font-bold text-black">
              {people.name}
            </div>

            <p className="text-grey-darker mb-4 -translate-y-1 text-base">
              {people.position}
            </p>
            <div className="hover:bg-blue cursor-pointer rounded-full border border-black bg-black py-2 px-4  font-Abel text-lg font-semibold text-white hover:text-primary">
              <a href={people.linkedIn} target="_blank">
                Contact
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  })
  return (
    <div className=" bg-black pb-8 btwnMdAndLg:pt-10 xl:pl-2 xl:pr-2">
      <div className=" relative mt-8 flex w-full items-center justify-center sm:p-10 md:mt-0 md:px-5 lg:px-8">
        <div className=" ml-3 lg:hidden">
          <Icon
            icon="ic:baseline-chevron-left"
            className="mr-1 cursor-pointer rounded-full bg-secondary-15 pl-0 text-5xl"
            color="#B69575"
            onClick={() => {
              if (current === 0) {
                current = studList.length
              }
              setCurrent(current - 1)
            }}
          />
        </div>
        {/* All Testimonials */}
        <div className="relative flex w-full justify-center bg-black duration-300 lg:hidden">
          {studList[current]}
        </div>
        <div className="hidden  md:gap-5 lg:mx-auto lg:flex lg:h-full lg:w-full lg:gap-8 xl:w-1/2 xl:justify-center xl:gap-2">
          {studList}
        </div>
        <div className="mr-3 lg:hidden">
          <Icon
            icon="ic:baseline-chevron-right"
            color="#B69575"
            className="ml-1 cursor-pointer rounded-full bg-secondary-15 pr-0 text-5xl"
            onClick={() => {
              if (current === studList.length - 1) {
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
