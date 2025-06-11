import DashboardLayout from "@/components/dashboard-layout";
import StatsCards from "@/components/stats-cards";
import ApiCallsChart from "@/components/api-calls-chart";
import PLChart from "@/components/pl-chart";
import CurrentPlan from "@/components/current-plan";
import ActivityFeed from "@/components/activity-feed";
import Integrations from "@/components/integrations";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex  flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-[700] text-[#15192c]">Dashboard</h1>
            <p className="text-[#92959e] mt-1">
              Information about your current plan and usages
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-md  px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#92959e]"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span className="text-sm font-medium">Wednesday, 17 May 2021</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#92959e]"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        <StatsCards />

        <div className="grid grid-cols-1  lg:grid-cols-5 gap-6">
          <div className="col-span-3 flex flex-col space-y-4">
            <ApiCallsChart />
            <div className="flex gap-4">
              <PLChart />
              <CurrentPlan />
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-1 gap-6">
            <ActivityFeed />
            <Integrations />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"></div>
      </div>
    </DashboardLayout>
  );
}
