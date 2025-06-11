import { FileText, Users, Database } from "lucide-react";
import Image from "next/image";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 bg-[#FFFFFF] rounded-xl  flex items-center py-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white  p-6 flex items-center h-[80%]  border-r  gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#fff2e9] flex  items-center justify-center">
          <Image src="/Paper.png" alt="Logo" width={20} height={20} />
        </div>
        <div className="w-[100%]">
          <p className="text-sm text-[#92959E] font-extrabold">Projects</p>
          <p className="text-base font-semibold text-[#15192c]">3</p>
        </div>
      </div>

      <div className="bg-white  p-6 flex items-center h-[80%]  border-r  gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#ede8ff] flex items-center justify-center">
          <Image src="/Swap.png" alt="Logo" width={20} height={20} />
        </div>
        <div className="w-[100%]">
          <p className="text-sm text-[#92959E] font-extrabold">Requests</p>
          <p className="text-base font-semibold text-[#15192c]">3456</p>
        </div>
      </div>

      <div className="bg-white  p-6 flex items-center h-[80%]  border-r  gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#eaf9ff] flex items-center justify-center">
          <Image src="/Profile.png" alt="Logo" width={20} height={20} />
        </div>
        <div className="w-[100%]">
          <p className="text-sm text-[#92959E] font-extrabold">Users</p>
          <p className="text-base font-semibold text-[#15192c]">3</p>
        </div>
      </div>

      <div className="bg-white  p-6 flex items-center h-[80%]  gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#ffebef] flex items-center justify-center">
          <Image src="/Graph.png" alt="Logo" width={20} height={20} />
        </div>
        <div className="w-[100%]">
          <p className="text-sm text-[#92959E] font-extrabold">Storage</p>
          <p className="text-base font-semibold text-[#15192c]">128/500 GB</p>
        </div>
      </div>
    </div>
  );
}
