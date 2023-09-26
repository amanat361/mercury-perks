"use client";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Search({}) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("q", query);
    router.push(pathname + "?" + params.toString());
  };

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
    <div
      className={`flex flex-1 items-center gap-2 rounded-lg border-[1px] p-3 transition-colors ${
        isFocused ? "border-gray-800" : "border-gray-200"
      }`}
      onClick={() => inputRef.current?.focus()}
    >
      <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
      <input
        className="flex-1 border-none p-0 text-sm text-gray-800 placeholder-gray-400 focus:border-none focus:ring-0"
        placeholder="Search or jump to"
        ref={inputRef}
        onChange={updateQuery}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <kbd className="rounded-lg bg-gray-100 px-2 py-1 text-xs text-gray-500">
        ctrl + k
      </kbd>
    </div>
  );
}
