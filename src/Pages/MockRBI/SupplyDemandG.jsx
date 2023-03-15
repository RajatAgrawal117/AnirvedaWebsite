import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts"

export default function SupplyDemandChart() {
  const data = [
    {price: 100, demand: 10, supply: 4},
    {price: 200, demand: 8, supply: 6},
    {price: 300, demand: 6, supply: 8},
    {price: 400, demand: 4, supply: 10},
    {price: 500, demand: 2, supply: 12},
  ]

  return (
    <div className="bg-black py-6">
      <h1 className="text-center font-Bebas text-5xl text-primary">
        Supply Demand Graph
      </h1>
      <LineChart width={600} height={400} data={data} className="mx-auto mt-6">
        <XAxis
          dataKey="price"
          label={{
            value: "Price",
            position: "insideBottomRight",
            offset: 0,
            style: {fill: "#C9872B", fontSize: "20px"},
          }}
          padding={{left: 30, right: 30}}
        />
        <YAxis
          label={{
            value: "Quantity",
            angle: -90,
            position: "insideLeft",
            style: {fill: "#C9872B", fontSize: "20px", margin: "20px"},
          }}
        />
        {/* <CartesianGrid stroke="#B69575" strokeDasharray="5 5" /> */}
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="supply"
          stroke="#8884d8"
          activeDot={{r: 8}}
        />
        <Line type="monotone" dataKey="demand" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}
