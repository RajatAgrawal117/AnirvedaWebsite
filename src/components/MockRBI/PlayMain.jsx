import React, {useState, useEffect} from "react"
import axios from "axios"

// import data
import choices from "../../data/mockrbi/choices"

export default function Play() {
  const [currentSituation, setCurrentSituation] = useState({
    situation: "Please wait... Click on Get Situation to start the game",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showTimer, setShowTimer] = useState(true)
  const [isButtonClicked, setIsButtonClicked] = useState(true)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [reloadComponent, setReloadComponent] = useState(false)
  const [isReloadButtonClicked, setIsReloadButtonClicked] = useState(false)
  const [isTimerFinished, setIsTimerFinished] = useState(false)
  const [isReloadButtonDisabled, setIsReloadButtonDisabled] = useState(false)
  // const [previousFetchedSituation, setPreviousFetchedSituation] = useState({})

  // console.log(currentSituation)

  //    Countdown Timer for 15 seconds
  const [time, setTime] = useState(10)

  useEffect(() => {
    let timer
    if (time > 0 && isReloadButtonClicked && !isButtonClicked) {
      timer = setTimeout(() => setTime(time - 1), 1000)
    } else {
      setIsButtonDisabled(true)
      setIsReloadButtonDisabled(false)
    }

    return () => clearTimeout(timer)
  }, [time, isReloadButtonClicked])

  const [balance, setBalance] = useState(
    localStorage.getItem("balance") || 8000
  )

  // Buttons Functionality
  //   Setting dummy impact
  const dummySituation = {
    situation:
      "The RBI is expected to cut the repo rate by 25 basis points to 6.25%.",
    impact: ["10%", "15%", "30%"],
    impactStatus: ["+", "-", "-"],
  }

  const buttonChoices = choices.map((choice) => choice.title)
  //   console.log(buttonChoices)
  //   console.log(dummySituation)
  const handleButtonClick = (choice) => {
    // console.log(dummySituation)
    // console.log(choice)
    const indexOfButtonChoice = buttonChoices.indexOf(choice)
    const correspodingImpact = dummySituation.impact[indexOfButtonChoice]
    //   Removing % from impact value
    const correspodingImpactValue = correspodingImpact.slice(0, -1)
    const correspodingImpactStatus =
      dummySituation.impactStatus[indexOfButtonChoice]

    if (correspodingImpactStatus === "+") {
      const newBalance = balance + (balance * correspodingImpactValue) / 100
      // console.log(newBalance)
      setBalance(Math.round(newBalance))
      localStorage.setItem("balance", Math.round(newBalance))
    } else if (correspodingImpactStatus === "-") {
      const newBalance = balance - (balance * correspodingImpactValue) / 100
      // console.log(newBalance)
      setBalance(Math.round(newBalance))
      localStorage.setItem("balance", Math.round(newBalance))
    }

    setIsButtonClicked(true)
    setIsReloadButtonClicked(false)
    // setShowTimer(false)
  }
  //   console.log(isButtonClicked)

  // Fetching new situation from API every time a reload button is clicked
  const handleReloadComponent = () => {
    setReloadComponent(!reloadComponent)

    axios
      .get("http://localhost:5000/api/v1/situation")
      .then((res) => {
        // console.log(res.data)
        // setCurrentSituation(res.data)
        // setPreviousFetchedSituation(res.data)
        // setIsLoading(false)
        // setShowTimer(true)

        if (currentSituation.situation === res.data.situation) {
          alert(
            "Please wait for the instructions before clicking on Get Situation. Don't click on Get Situation multiple times."
          )
        } else {
          setCurrentSituation(res.data)
          setIsButtonClicked(false)
          setIsButtonDisabled(false)
          setIsReloadButtonClicked(true)
          setTime(10)
          setIsReloadButtonDisabled(true)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      {/* Timer */}
      <div
        className={` ${
          showTimer ? "fixed md:hidden" : "hidden"
        } top-8 right-8 rounded-full bg-secondary-opacity text-center`}
      >
        <div className="px-6 py-9">
          <h1 className="font-Lato text-xl font-semibold text-secondary">
            Time Left
          </h1>
          <h1 className="font-Lato text-xl font-semibold text-secondary">
            00:{time < 10 ? `0${time}` : time}
          </h1>
        </div>
      </div>

      <div className="mt-16 text-center md:hidden">
        <h1 className="font-Lato text-4xl font-semibold text-primary">
          Your Balance
        </h1>
        <h2 className="mt-2 font-Lato text-3xl font-semibold text-primary">
          ₹ {localStorage.getItem("balance")}
        </h2>
      </div>

      <div className="mt-16 text-center md:mt-4">
        <h1 className="font-Lato text-4xl font-semibold text-primary">
          Situation
        </h1>
        <p className="mt-3 text-xl text-secondary">
          {currentSituation.situation}
        </p>
      </div>

      <div className="mt-12 md:mt-7">
        <h1 className="text-center font-Lato text-4xl font-semibold text-primary">
          Make your choice
        </h1>

        <div className="mt-7 space-y-7 sm:flex sm:flex-row sm:flex-wrap sm:gap-6 sm:space-y-0 md:mt-4 lg:justify-center lg:gap-6">
          {choices.map((choice) => (
            <div
              key={choice.id}
              className="flex flex-col  items-center rounded-lg bg-tertiary py-4 xs:mx-auto xs:w-4/5 sm:w-3/6  md:w-[40%] lg:mx-0 lg:w-72 xl:w-80"
            >
              <img
                src={choice.img}
                alt={choice.alt}
                className="w-3/4 xs:w-3/5"
              />
              <button
                className={`my-5 rounded-md border-[2px] border-transparent bg-primary px-4 pt-1 pb-2 text-2xl  text-white transition-colors duration-300 
                    ${
                      isButtonClicked || isButtonDisabled
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer opacity-100 hover:border-[2px] hover:border-primary hover:bg-transparent hover:text-primary "
                    }
                      `}
                disabled={isButtonClicked || isButtonDisabled}
                onClick={() => handleButtonClick(choice.title)}
              >
                {choice.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* This Balance and Timer will be visible on larger screens */}
      <div className="mt-8  hidden md:flex md:justify-between">
        {/* Timer */}
        <div className={`${showTimer ? "md:flex" : "invisible"}`}>
          <h1 className="font-Lato text-3xl font-semibold text-primary">
            Time Left : 00:{time < 10 ? `0${time}` : time}
          </h1>
        </div>
        {/* Balance */}
        <h1 className="font-Lato text-3xl font-semibold text-primary">
          Your Balance : ₹ {balance}
        </h1>
        {/* Reload Component Button */}
        <div className="flex items-center">
          <button
            className={`rounded-md border-[2px] border-transparent bg-tertiary px-3 py-1  text-lg text-secondary ${
              isReloadButtonDisabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer opacity-100"
            } `}
            disabled={isReloadButtonDisabled}
            onClick={handleReloadComponent}
          >
            Get New Situation
          </button>
        </div>
      </div>
    </div>
  )
}
