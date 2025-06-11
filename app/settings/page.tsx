import DashboardLayout from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="border-none rounded-xl">
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-[#15192c] mb-8">Settings</h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium text-[#15192c] mb-4">Account Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#92959e] mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-[#ececee] focus:outline-none focus:ring-2 focus:ring-[#7549ff]"
                      placeholder="your@email.com"
                      defaultValue="user@example.com"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#92959e] mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 rounded-lg border border-[#ececee] focus:outline-none focus:ring-2 focus:ring-[#7549ff]"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-[#15192c] mb-4">Notification Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded focus:ring-[#7549ff]"
                        checked
                      />
                      <span className="ml-2 text-sm text-[#92959e]">Email notifications</span>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded focus:ring-[#7549ff]"
                        checked
                      />
                      <span className="ml-2 text-sm text-[#92959e]">Push notifications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
