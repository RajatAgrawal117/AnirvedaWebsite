import React from "react"

export default function Form() {
  return (
    <div className="mx-auto mt-3 w-[90%] bg-secondary py-3">
      <h1 className="relative pb-1 text-center text-xl font-bold after:absolute after:bottom-0 after:left-0 after:mx-4 after:h-[2px] after:w-[90%] after:bg-black">
        Let's Connect
      </h1>
      <form className="mt-3 space-y-2 px-4">
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="firstName" className="text-lg">
            First name
          </label>
          <div className="mt-1 w-3/5">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className=" w-full rounded-lg bg-inputFieldColor px-2 py-1"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="lastName" className="text-lg">
            Last name
          </label>
          <div className="mt-1 w-3/5">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full rounded-lg bg-inputFieldColor px-2 py-1"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="email" className="text-lg">
            Email address
          </label>
          <div className="mt-1 w-3/5">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-lg bg-inputFieldColor px-2 py-1"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="phone" className="text-lg">
            Phone number
          </label>
          <div className="mt-1 w-3/5">
            <input
              type="tel"
              name="phone"
              id="phone"
              className=" w-full rounded-lg bg-inputFieldColor px-2 py-1"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="subject" className="text-lg">
            Subject
          </label>
          <div className="mt-1 w-3/5">
            <input
              type="text"
              name="subject"
              id="subject"
              className=" w-full rounded-lg bg-inputFieldColor px-2 py-1"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="message" className="text-lg">
            Message
          </label>
          <div className="mt-1 w-3/5">
            <textarea
              type="text"
              name="message"
              id="message"
              className=" w-full rounded-lg bg-inputFieldColor px-2 py-1"
            />
          </div>
        </div>
      </form>
      <div className="mt-5 flex justify-center">
        <button className="rounded-lg bg-black px-4 py-1 text-white">
          Submit
        </button>
      </div>
    </div>
  )
}
