"use client";
import Image from "next/image";
import perksData from "@/data/mercury_perks.json";
import { PerksData, Perk } from "@/types/perk";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function Perk({ perk }: { perk: Perk }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

const Category = ({ category, perks }: { category: string; perks: Perk[] }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const filteredPerks = query
    ? perks.filter((perk) =>
        perk.company_name.toLowerCase().includes(query.toLowerCase())
      )
    : perks;

  if (!filteredPerks.length) return null;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-medium tracking-wider text-gray-900">
        {category}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {filteredPerks.map((perk) => (
          <Perk key={perk.company_name} perk={perk} />
        ))}
      </div>
    </div>
  );
};

const Perks = () => {
  const perks: PerksData = perksData;

  return (
    <div className="mt-4 flex flex-col gap-4">
      {Object.entries(perks).map(([category, perks]) => (
        <Category key={category} category={category} perks={perks} />
      ))}
    </div>
  );
};

export default Perks;
