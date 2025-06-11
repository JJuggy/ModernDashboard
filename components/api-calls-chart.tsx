"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from "recharts"
import { Maximize2 } from "lucide-react"

const data = [
  { time: "10:30 AM", calls: 1 },
  { time: "11:00 AM", calls: 2 },
  { time: "11:30 AM", calls: 5 },
  { time: "12:00 PM", calls: 3 },
  { time: "12:30 PM", calls: 4 },
  { time: "01:00 PM", calls: 7 },
  { time: "01:30 PM", calls: 5 },
  { time: "02:00 PM", calls: 6 },
  { time: "02:30 PM", calls: 9 },
  { time: "03:00 PM", calls: 7 },
  { time: "03:30 PM", calls: 4 },
]

export default function ApiCallsChart() {
  const [selectedPoint, setSelectedPoint] = useState(8) // Index of the highlighted point

  return (
    <Card className=" border-none h-fit rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-[#15192c]">API Calls in last 6 hours</CardTitle>
        <button className="text-[#92959e] hover:text-[#15192c]">
          <Maximize2 size={18} />
        </button>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[240px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7549ff" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#7549ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#92959e" }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#92959e" }}
                tickFormatter={(value) => `${value}k`}
              />
              <CartesianGrid vertical={false} stroke="#ececee" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #ececee",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
                formatter={(value) => [`${value}k`, "API Calls"]}
              />
              <Line
                type="monotone"
                dataKey="calls"
                stroke="#7549ff"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 8, fill: "#7549ff", stroke: "white", strokeWidth: 2 }}
                fillOpacity={1}
                fill="url(#colorCalls)"
              />
              <ReferenceDot
                x={data[selectedPoint].time}
                y={data[selectedPoint].calls}
                r={8}
                fill="#7549ff"
                stroke="white"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>

          {/* Tooltip for selected point */}
          <div
            className="absolute bg-white rounded-lg shadow-lg border border-[#ececee] p-3"
            style={{
              top: "80px",
              left: "60%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          >
            <div className="text-sm text-[#92959e]">API Calls</div>
            <div className="text-xl font-semibold text-[#15192c]">7546</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
