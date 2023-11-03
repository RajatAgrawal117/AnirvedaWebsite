const situations = [
  {
    id: 0,
    name: "Asian financial crisis (1997-1998)",
    situation:
      "The Asian Financial Crisis, which occurred in 1997-1998, was a severe economic downturn that primarily affected Southeast Asian countries like Thailand, Indonesia, and South Korea. It resulted from currency devaluations, excessive borrowing, and financial instability, leading to economic contractions, bankruptcies, and social unrest. The crisis had global repercussions, causing a worldwide decline in investor confidence and impacting international markets.",
    choices: [
      "Financial Sector Support",
      "Fiscal Measures",
      "Currency Interventions",
    ],
    // Save , loan
    options: [
      {
        choice: "Financial Sector Support",
        tag: "developed",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Currency Interventions",
        tag: "emerging",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Fiscal Measures",
        tag: "lessDeveloped",
        impact: "10%",
        impactStatus: "+",
      },
    ],
  },
  {
    id: 1,
    name: "Japanese Lost Decade",
    situation:
      "The Japanese Lost Decade refers to the 1990s when Japan experienced a prolonged economic stagnation marked by asset price deflation and slow growth. It resulted from a burst economic bubble and excessive debt. While the impact was primarily on Japan, it served as a cautionary tale for policymakers globally, highlighting the challenges of managing economic downturns and deflation.",
    choices: ["Bank bailouts", "Fiscal Policies"],
    // Save , loan
    options: [
      {
        choice: "Fiscal Policies",
        tag: "lessDeveloped",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Fiscal Policies",
        tag: "emerging",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Bank bailouts",
        tag: "developed",
        impact: "10%",
        impactStatus: "+",
      },
    ],
  },
  {
    id: 2,
    name: "Zimbabwe Hyperinflation (2000s)",
    situation:
      "Zimbabwe experienced hyperinflation in the 2000s, with annual inflation rates reaching astronomical levels, such as 89.7 sextillion percent in November 2008. This crisis resulted from factors like economic mismanagement and land reform policies. It caused severe economic collapse, poverty, and a mass exodus of citizens. The world witnessed the devastating consequences of hyperinflation on a nation's stability and well-being.",
    choices: [
      "No Substantial Impact",
      "International Assistance",
      "Stablization Efforts",
    ],
    options: [
      {
        choice: "Stablization Efforts",
        tag: "emerging",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "International Assistance",
        tag: "lessDeveloped",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "No Substantial Impact",
        tag: "developed",
        impact: "10%",
        impactStatus: "+",
      },
    ],
  },
  {
    id: 3,
    name: "",
    situation:
      "The 2001 economic crisis in Argentina was a severe financial collapse marked by a debt default, currency devaluation, and widespread protests. It resulted in a deep recession, high unemployment, and widespread poverty in Argentina. While its direct global impact was limited, it highlighted the risks of unsustainable debt and economic mismanagement in emerging markets.",
    choices: [
      "No Substantial Impact",
      "Debt Restructuring",
      "Currency Interventions",
    ],
    options: [
      {
        choice: "Currency Interventions",
        tag: "emerging",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "No Substantial Impact",
        tag: "developed",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Debt Restructuring",
        tag: "lessDeveloped",
        impact: "10%",
        impactStatus: "+",
      },
    ],
  },
  {
    id: 4,
    name: "2008 Financial Crisis",
    situation:
      "The 2008 financial crisis was a global economic meltdown triggered by the collapse of major financial institutions and a housing market crash in the United States. It led to a severe worldwide recession, with widespread unemployment, bank failures, and a global credit crunch. Governments implemented massive bailouts and stimulus packages to stabilize economies.",
    choices: [
      "Quantitative Easing (QE)",
      "Fiscal Stimulus",
      "Interest Rate Adjustment",
    ],
    options: [
      {
        choice: "Interest Rate Adjustment",
        tag: "emerging",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Fiscal Stimulus",
        tag: "lessDeveloped",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Quantitative Easing (QE)",
        tag: "developed",
        impact: "10%",
        impactStatus: "+",
      },
    ],
  },
  {
    id: 5,
    name: "European debt crisis ( 2010s)",
    situation:
      "The European debt crisis of the 2010s was a financial turmoil primarily affecting countries in the Eurozone, such as Greece, Spain, and Portugal. It resulted from excessive government debt, economic instability, and banking issues. The crisis had a global impact, causing market volatility, economic slowdowns, and prompting austerity measures in affected nations.",
    choices: [
      "Unconventional Monetary Policy",
      "Enhanced Regulatory Measures",
      "Currency Interventions",
    ],
    options: [
      {
        choice: "Enhanced Regulatory Measures",
        tag: "lessDeveloped",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Unconventional Monetary Policy",
        tag: "developed",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Currency Interventions",
        tag: "emerging",
        impact: "10%",
        impactStatus: "+",
      },
    ],
  },
  {
    id: 6,
    name: "",
    situation:
      "In 2013, India faced a rupee depreciation crisis due to a large current account deficit and capital outflows. The Indian rupee's value sharply declined against the US dollar, leading to higher inflation and economic uncertainty. While it primarily affected India, it also contributed to concerns about emerging market vulnerabilities in the global economy.",

    choices: [
      "No Substantial Impact",
      "Trade Diversification",
      "Currency Interventions",
    ],

    options: [
      {
        choice: "No Substantial Impact",
        tag: "developed",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Currency Interventions",
        tag: "emerging",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Trade Diversification",
        tag: "lessDeveloped",
        impact: "10%",
        impactStatus: "+",
      },
    ],
  },
  {
    id: 7,
    name: "COVID-19 pandemic",
    situation:
      "The COVID-19 pandemic triggered a severe global recession in 2020, causing widespread economic disruptions, job losses, and financial market volatility. Lockdowns and supply chain interruptions significantly impacted businesses, leading to negative GDP growth across many countries, and central banks and governments implemented extensive stimulus measures to mitigate the economic fallout.",
    options: [
      {
        choice: "Interest Rate Adjustments",
        tag: "emerging",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Direct Financial Support",
        tag: "developed",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Food Security Measures",
        tag: "lessDeveloped",
        impact: "10%",
        impactStatus: "+",
      },
    ],
  },
  {
    id: 8,
    name: "Brazilian Economic Crisis (Ongoing)",
    situation:
      "The ongoing Brazilian economic crisis, marked by recession, high unemployment, and political instability, has impacted global markets. Brazil's economic struggles have dampened investor confidence, affecting international trade and investment. Falling commodity prices, corruption scandals, and fiscal challenges have contributed. The crisis underscores the interconnectedness of economies, influencing global economic sentiment and trade dynamics.",
    choices: ["Risk Assessments", "Currency Interventions", "Economic Reforms"],
    options: [
      {
        choice: "Economic Reforms",
        tag: "emerging",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Currency Interventions",
        tag: "lessDeveloped",
        impact: "10%",
        impactStatus: "+",
      },
      {
        choice: "Risk Assessments",
        tag: "developed",
        impact: "10%",
        impactStatus: "+",
      },
    ],
  },
]

export default situations
