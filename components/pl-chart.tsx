"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Maximize2 } from "lucide-react";
import Image from "next/image";

const data = [
  { name: "Re-used APIs", value: 36, color: "#fd2254" },
  { name: "Webhooks", value: 38, color: "#d0d2da" },
  { name: "API Calls", value: 25, color: "#00b7fe" },
];

export default function PLChart() {
  return (
    <Card className="border-none rounded-2xl w-[50%] h-[380px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-[#15192c]">
          P&L
        </CardTitle>
        <button className="text-[#92959e] hover:text-[#15192c]">
          <Image src="/Filter.png" alt="Logo" width={20} height={20} />
        </button>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-[#92959e] mb-4">
          Total profit growth of 25%
        </p>

        <div className="h-[220px] flex">
          <div className="grid grid-cols- gap-2 mt-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex flex-col">
                  <span className="text-xs text-[#92959e] whitespace-nowrap">{item.name}</span>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
          <ResponsiveContainer width="90%" height="90%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
