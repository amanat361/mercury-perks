import { MagnifyingGlassIcon, XMarkIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="w-full max-w-5xl p-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-lg border-[1px] border-gray-200 p-3 flex-1">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
          <input
            className="flex-1 border-none p-0 text-sm text-gray-400 focus:border-none focus:ring-0"
            placeholder="Search or jump to"
          />
          <kbd className="bg-gray-100 text-xs text-gray-500 px-2 py-1 rounded-lg">
            ctrl + k
          </kbd>
          <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-black" />
        </div>
        <button className="p-3 shadow rounded-lg flex items-center gap-2 hover:bg-emerald-400 hover:text-white text-gray-500 transition-colors">
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
