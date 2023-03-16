import React, {useState} from "react"
import {createContext} from "react"
import axios from "axios"

export const SituationContext = createContext()

export const SituationProvider = ({children}) => {
  //   const [clickedSituation, setClickedSituation] = useState(null)
  const [completedSituationsTillNow, setCompletedSituationsTillNow] = useState(
    JSON.parse(localStorage.getItem("completedSituationsTillNow")) || []
  )
  const [isResetButtonClicked, setIsResetButtonClicked] = useState(false)

  // Uncomment the following line for local development and comment the next line
  // const BASE_URL = "http://localhost:5000/api/v1/situation" // This is for local development
  const BASE_URL = "https://mockrbiserver.onrender.com/api/v1/situation" // This is for production

  const resetAllSituations = () => {
    setIsResetButtonClicked(true)
    axios
      .delete(BASE_URL)
      .then((res) => {
        console.log(res.data)
        setCompletedSituationsTillNow([])
        localStorage.setItem("completedSituationsTillNow", JSON.stringify([]))
        setIsResetButtonClicked(false)
      })
      .catch((err) => {
        console.log(err)
        setIsResetButtonClicked(false)
      })
    // console.log("Resetting all situations")
  }

  const markSituationComplete = (situation) => {
    //   console.log({ situation: situation.situation })

    axios
      .post(BASE_URL, {
        situation: situation.situation,
      })
      .then((res) => {
        console.log(res)
        // If the situation is already completed, then don't add it to the array
        if (completedSituationsTillNow.some((s) => s.id === situation.id)) {
          return
        } else {
          setCompletedSituationsTillNow([
            ...completedSituationsTillNow,
            situation,
          ])
          // Adding the completed situations till now to localStorage so that the value persists even after the page is refreshed
          localStorage.setItem(
            "completedSituationsTillNow",
            JSON.stringify([...completedSituationsTillNow, situation])
          )
        }
      })
      .catch((err) => {
        console.log(err)
      })

    // setClickedSituation(situation)
  }

  // ! Main problem: This logs the value of clickedSituation in the console for "/admin/situation" route but it does not persist the value of clickedSituation in the console for "/mockrbi/play" route. States in context are initialized to default values.
  // ! Since there is no solution to deal with this problem, I have to set up the server to store the value of clickedSituation in the database and then retrieve it from the database.
  //   console.log(clickedSituation)

  return (
    <SituationContext.Provider
      value={{
        state: {completedSituationsTillNow, isResetButtonClicked},
        markSituationComplete,
        resetAllSituations,
      }}
    >
      {children}
    </SituationContext.Provider>
  )
}
