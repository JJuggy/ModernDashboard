import DashboardLayout from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function Invoices() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="border-none rounded-xl">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-[#15192c]">Invoices</h1>
              <button className="bg-[#7549ff] text-white px-4 py-2 rounded-lg hover:bg-[#6036ff]">
                New Invoice
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none rounded-xl">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-[#92959e]">Invoice #INV-001</span>
                    <span className="text-sm text-[#7549ff]">Paid</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-[#92959e]">Amount</span>
                      <span className="text-lg font-semibold text-[#15192c]">$299.99</span>
                    </div>
                    <div>
                      <span className="text-sm text-[#92959e]">Due Date</span>
                      <span className="text-sm text-[#15192c]">June 15, 2025</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="text-sm text-[#7549ff] hover:text-[#6036ff]">
                      View Details
                    </button>
                  </div>
                </div>
              </Card>

              <Card className="border-none rounded-xl">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-[#92959e]">Invoice #INV-002</span>
                    <span className="text-sm text-[#7549ff]">Paid</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-[#92959e]">Amount</span>
                      <span className="text-lg font-semibold text-[#15192c]">$299.99</span>
                    </div>
                    <div>
                      <span className="text-sm text-[#92959e]">Due Date</span>
                      <span className="text-sm text-[#15192c]">June 15, 2025</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="text-sm text-[#7549ff] hover:text-[#6036ff]">
                      View Details
                    </button>
                  </div>
                </div>
              </Card>

              <Card className="border-none rounded-xl">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-[#92959e]">Invoice #INV-003</span>
                    <span className="text-sm text-[#7549ff]">Paid</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-[#92959e]">Amount</span>
                      <span className="text-lg font-semibold text-[#15192c]">$299.99</span>
                    </div>
                    <div>
                      <span className="text-sm text-[#92959e]">Due Date</span>
                      <span className="text-sm text-[#15192c]">June 15, 2025</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="text-sm text-[#7549ff] hover:text-[#6036ff]">
                      View Details
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
