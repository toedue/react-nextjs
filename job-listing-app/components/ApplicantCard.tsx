import { Applicant } from "@/types/applicant";

interface ApplicantCardProps {
  applicant: Applicant;
}

const statusStyles: Record<Applicant["status"], string> = {
  New: "bg-indigo-50 text-indigo-600",
  Shortlisted: "bg-emerald-50 text-emerald-600",
  Rejected: "bg-rose-50 text-rose-600",
};

export default function ApplicantCard({ applicant }: ApplicantCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm">
      <div>
        <p className="font-semibold text-slate-900">{applicant.name}</p>
        <p className="text-sm text-slate-500">{applicant.jobTitle}</p>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[applicant.status]}`}
      >
        {applicant.status}
      </span>
    </div>
  );
}
