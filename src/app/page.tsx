import Image from "next/image";
import Search from "@/components/Search";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import perksData from "@/data/mercury_perks.json";
import { PerksData, Perk } from "@/types/perk";

function Perk({ perk }: { perk: Perk }) {
  return (
    <div className="flex flex-col justify-between rounded-lg border-[1px] border-gray-200 p-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image
            src={perk.image_src}
            alt={perk.company_name}
            width={40}
            height={40}
          />
          <h3 className="text-sm font-medium tracking-wide text-gray-900">
            {perk.company_name}
          </h3>
        </div>
        <h4 className="text-sm font-medium tracking-wide text-gray-900">
          {perk.deal_text}
        </h4>
        <p className="text-sm text-gray-500">{perk.description}</p>
      </div>
    </div>
  );
}

const Category = ({ category, perks }: { category: string; perks: Perk[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-medium tracking-wider text-gray-900">
        {category}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {perks.map((perk) => (
          <Perk key={perk.company_name} perk={perk} />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="w-full max-w-5xl p-4">
      <div className="flex items-center gap-4">
        <Search />
        <button className="flex items-center gap-2 rounded-lg p-3 text-gray-500 shadow transition-colors hover:bg-emerald-600 hover:text-white">
          <CheckBadgeIcon className="h-4 w-4" />
          <span className="text-sm">Hire Sam</span>
        </button>
      </div>
      <h1 className="py-6 text-2xl font-medium tracking-wider text-gray-900">
        Perks
      </h1>
      <hr></hr>
      <div className="mt-4 flex flex-col gap-4">
        {Object.entries(perksData as PerksData).map(([category, perks]) => (
          <Category key={category} category={category} perks={perks} />
        ))}
      </div>
    </main>
  );
}
