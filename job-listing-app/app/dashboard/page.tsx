import DashboardStats from "@/components/DashboardStats";
import ApplicantCard from "@/components/ApplicantCard";
import { applicants } from "@/data/applicants";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-2xl font-bold text-zinc-50">
          Applicants Dashboard
        </h1>

        <DashboardStats applicants={applicants} />

        <div className="mt-8 flex flex-col gap-3">
          {applicants.map((applicant) => (
            <ApplicantCard key={applicant.id} applicant={applicant} />
          ))}
        </div>
      </div>
    </div>
  );
}
