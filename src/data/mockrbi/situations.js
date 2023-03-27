const situations = [
  {
    id: 0,
    name: "Monetary Policy",
    situation: "Dummy situation",
    // Save , loan
    impact: ["10%", "10%"],
    impactStatus: ["+", "+"],
  },
  {
    id: 1,
    name: "Inflation",
    situation: "The central bank increases the repo rate. You should?",
    // Save , loan
    impact: ["10%", "10%"],
    impactStatus: ["+", "-"],
  },
  {
    id: 2,
    name: "Deflation",
    situation:
      "The central bank buys government securities (OMO) and reduces all interest rates. You should?",
    // Save , loan
    impact: ["10%", "10%"],
    impactStatus: ["-", "+"],
  },
  {
    id: 3,
    name: "Hyperinflation",
    situation:
      "The central bank decreases the money supply by selling government bonds or raising bank reserve requirements. You should?",
    // Save , loan
    impact: ["15%", "15%"],
    impactStatus: ["+", "-"],
  },
  {
    id: 4,
    name: "Stagflation",
    situation: "To be asked to mam",
    // Save , loan
    impact: ["15%", "15%"],
    impactStatus: ["+", "-"],
  },
  {
    id: 5,
    name: "Natural Disaster",
    situation:
      "RBI cuts repo rate by 75 bps to 4.40% to mitigate Covid-19 impact - you should?",
    // Save , loan
    impact: ["10%", "10%"],
    impactStatus: ["-", "+"],
  },
  {
    id: 6,
    name: "Financial Scams",
    situation:
      "The Central Bank reduced the reverse repo rate and decreased the reserve requirements. You should?",
    // Save , loan
    impact: ["15%", "15%"],
    impactStatus: ["-", "+"],
  },
]

export default situations
