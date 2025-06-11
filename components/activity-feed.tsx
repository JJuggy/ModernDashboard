import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface ActivityItem {
  id: number;
  name: string;
  comment: string;
  avatar: string;
  initials: string;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    name: "James Anderson",
    comment:
      'Called "Books API" with the JavaScript webhook and commented: "Books API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application."',
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JA",
  },
  {
    id: 2,
    name: "Vector Som",
    comment:
      'Called "Books API" with the JavaScript webhook and commented: "Books API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application."',
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "VS",
  },
  {
    id: 3,
    name: "Nether Stone",
    comment:
      'Called "Books API" with the JavaScript webhook and commented: "Books API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application."',
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "NS",
  },
  {
    id: 4,
    name: "Jeff Sussex",
    comment:
      'Called "Books API" with the JavaScript webhook and commented: "Books API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application."',
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JS",
  },
];

export default function ActivityFeed() {
  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-[#15192c]">
          Activity
        </CardTitle>
        <button className="text-[#92959e] hover:text-[#15192c]">
          <MoreVertical size={18} />
        </button>
      </CardHeader>
      <CardContent className="pt-0 mt-4">
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3">
              <Image
                src="/james.png"
                alt="Logo"
                width={20}
                height={20}
                style={{ width: "40px", height: "40px" }}
              />
              <div>
                <p className="text-sm font-medium text-[#15192c]">
                  {activity.name}
                </p>
                <p className="text-xs text-[#92959e] mt-1">
                  {activity.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
