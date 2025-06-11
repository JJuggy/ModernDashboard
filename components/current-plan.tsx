import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Maximize2, ChevronRight, Users } from "lucide-react"

export default function CurrentPlan() {
  return (
    <Card className="border-none  rounded-xl w-[48%] [340px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-[#15192c]">Current Plan</CardTitle>
        <button className="text-[#92959e] hover:text-[#15192c]">
          <Maximize2 size={18} />
        </button>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-[#92959e] mb-6">Information and usages of your current plan</p>

        <div className="bg-[#f8f9fc] rounded-lg p-4 flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#eaf9ff] flex items-center justify-center">
              <Users className="w-4 h-4 text-[#00b7fe]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#15192c]">Teams Plan</p>
              <p className="text-sm text-[#92959e]">$99/mo</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#92959e]" />
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-[#15192c]">Projects</span>
              <span className="text-sm text-[#92959e]">1/3</span>
            </div>
            <div className="h-2 bg-[#f4f5f7] rounded-full overflow-hidden">
              <div className="h-full bg-[#ff6a00] rounded-full" style={{ width: "33%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-[#15192c]">Users</span>
              <span className="text-sm text-[#92959e]">1/5</span>
            </div>
            <div className="h-2 bg-[#f4f5f7] rounded-full overflow-hidden">
              <div className="h-full bg-[#7549ff] rounded-full" style={{ width: "20%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-[#15192c]">Requests/day</span>
              <span className="text-sm text-[#92959e]">7.5k/10k</span>
            </div>
            <div className="h-2 bg-[#f4f5f7] rounded-full overflow-hidden">
              <div className="h-full bg-[#fd2254] rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
