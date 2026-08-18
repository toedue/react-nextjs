import { Applicant } from "@/types/applicant";

interface DashboardStatsProps {
  applicants: Applicant[];
}

export default function DashboardStats({ applicants }: DashboardStatsProps) {
  const total = applicants.length;
  const newCount = applicants.filter((a) => a.status === "New").length;
  const shortlisted = applicants.filter(
    (a) => a.status === "Shortlisted",
  ).length;
  const rejected = applicants.filter((a) => a.status === "Rejected").length;

  const stats = [
    { label: "Total Applicants", value: total, color: "text-slate-900" },
    { label: "New", value: newCount, color: "text-indigo-600" },
    { label: "Shortlisted", value: shortlisted, color: "text-emerald-600" },
    { label: "Rejected", value: rejected, color: "text-rose-600" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl bg-white p-5 text-center shadow-sm"
        >
          <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
