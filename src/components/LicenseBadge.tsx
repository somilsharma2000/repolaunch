import type { LicenseType } from "@/types";

export default function LicenseBadge({ license, type }: { license: string; type: LicenseType }) {
  const safe = type === "safe";
  return (
    <span
      title={safe ? "Permissive license — commercial use OK" : "Restrictive license — read the note"}
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        safe
          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
          : "border-red-400/40 bg-red-400/10 text-red-300"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${safe ? "bg-emerald-400" : "bg-red-400"}`} />
      {license} {safe ? "· Safe" : "· Warning"}
    </span>
  );
}
