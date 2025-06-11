import DashboardLayout from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="border-none rounded-xl">
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-[#15192c] mb-4">Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-medium text-[#15192c] mb-2">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#92959e] mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-[#ececee] focus:outline-none focus:ring-2 focus:ring-[#7549ff]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#92959e] mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-[#ececee] focus:outline-none focus:ring-2 focus:ring-[#7549ff]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium text-[#15192c] mb-2">Account Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#92959e] mb-1">Theme</label>
                    <select
                      className="w-full px-4 py-2 rounded-lg border border-[#ececee] focus:outline-none focus:ring-2 focus:ring-[#7549ff]"
                    >
                      <option>Light</option>
                      <option>Dark</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#92959e] mb-1">Notifications</label>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded focus:ring-[#7549ff]"
                        />
                        <span className="ml-2 text-sm text-[#92959e]">Email</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded focus:ring-[#7549ff]"
                        />
                        <span className="ml-2 text-sm text-[#92959e]">Push</span>
                      </div>
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
