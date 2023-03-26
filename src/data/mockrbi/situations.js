const situations = [
  {
    id: 1,
    name: "Deflation",
    situation:
      "Regarded as the ‘mystery of missing deflation puzzle,’ the Great Recession in the United States, which lasted from December 2007 to June 2009, marked a deflationary period with a decline in commodity prices, especially oil. This caused concern among economists that deflation could result in a prolonged recession, increased unemployment, and added stress to the U.S. economy.",
    impact: ["10%", "5%", "10%"],
    // Save , invest, loan
    impactStatus: ["+", "-", "-"],
  },
  {
    id: 2,
    name: "Hyperinflation",
    situation:
      "The hyperinflation crisis in Zimbabwe in 2019 led to a rapid increase in the cost of living, with prices skyrocketing at an alarming rate ranging from 300-500%. This has resulted in widespread economic instability, leading to a significant decline in living standards for many Zimbabweans. The government's failure to implement effective economic policies and address the root causes of the crisis has further exacerbated the problem, and the situation remains precarious.",
    // Save , invest, loan
    impact: ["15%", "5%", "15%"],
    impactStatus: ["+", "-", "-"],
  },
  {
    id: 3,
    name: "Stagflation",
    situation:
      "Stagflation was a phenomenon of simultaneous high inflation and economic stagnation in the United States during the 1970s and early 1980s. It was caused by increased government spending on the Vietnam War, rising oil prices due to the OPEC embargo, and decreased productivity growth. The Federal Reserve attempted to combat stagflation by raising interest rates, which led to a recession in the early 1980s before the economy eventually recovered.",
    // Save , invest, loan
    impact: ["15%", "5%", "15%"],
    impactStatus: ["+", "-", "-"],
  },
]

export default situations
