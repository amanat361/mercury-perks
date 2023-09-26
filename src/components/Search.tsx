"use client"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useEffect, useState } from "react";

export default function Search({}) {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "k" && e.ctrlKey) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className={`flex flex-1 items-center gap-2 rounded-lg border-[1px] p-3 transition-colors ${isFocused ? "border-gray-800" : "border-gray-200"}`} onClick={() => inputRef.current?.focus()}>
      <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
      <input
        className="flex-1 border-none p-0 text-sm placeholder-gray-400 text-gray-800 focus:border-none focus:ring-0"
        placeholder="Search or jump to"
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <kbd className="rounded-lg bg-gray-100 px-2 py-1 text-xs text-gray-500">
        ctrl + k
      </kbd>
      <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-black" onClick={() => setQuery("")} />
    </div>
  );
}
