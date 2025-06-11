import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal, MoreVertical } from "lucide-react";

export default function Integrations() {
  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-[#15192c]">
          Integrations
        </CardTitle>
        <button className="text-[#92959e] hover:text-[#15192c]">
          <MoreVertical size={18} />
        </button>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[100px] flex items-center justify-center">
          <p className="text-sm text-[#92959e]">No active integrations</p>
        </div>
      </CardContent>
    </Card>
  );
}
