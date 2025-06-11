import DashboardLayout from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"

export default function Help() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="border-none rounded-xl">
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-[#15192c] mb-8">Help Center</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none rounded-xl p-6">
                <h2 className="text-lg font-medium text-[#15192c] mb-4">Getting Started</h2>
                <p className="text-sm text-[#92959e]">
                  Learn how to set up your account and start using our platform effectively.
                </p>
                <button className="mt-4 text-sm text-[#7549ff] hover:text-[#6036ff]">
                  View Guide
                </button>
              </Card>

              <Card className="border-none rounded-xl p-6">
                <h2 className="text-lg font-medium text-[#15192c] mb-4">API Documentation</h2>
                <p className="text-sm text-[#92959e]">
                  Detailed documentation for all our API endpoints and integration options.
                </p>
                <button className="mt-4 text-sm text-[#7549ff] hover:text-[#6036ff]">
                  View Docs
                </button>
              </Card>

              <Card className="border-none rounded-xl p-6">
                <h2 className="text-lg font-medium text-[#15192c] mb-4">Support</h2>
                <p className="text-sm text-[#92959e]">
                  Contact our support team for assistance or submit a ticket.
                </p>
                <button className="mt-4 text-sm text-[#7549ff] hover:text-[#6036ff]">
                  Contact Support
                </button>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
