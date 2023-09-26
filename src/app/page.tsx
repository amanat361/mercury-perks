import Search from "@/components/Search";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="w-full max-w-5xl p-4">
      <div className="flex items-center gap-4">
        <Search />
        <button className="flex items-center gap-2 rounded-lg p-3 text-gray-500 shadow transition-colors hover:bg-emerald-400 hover:text-white">
          <CheckBadgeIcon className="h-4 w-4" />
          <span className="text-sm">Hire Sam</span>
        </button>
      </div>
      <h1 className="py-6 text-2xl font-medium tracking-wider text-gray-900">
        Perks
      </h1>
      <hr></hr>
    </main>
  );
}
