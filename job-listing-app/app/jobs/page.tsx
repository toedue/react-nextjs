// app/jobs/page.tsx
import JobCard from "@/components/JobCard";
import { jobs } from "@/data/jobs";

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-zinc-50 p-6 sm:p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Opportunities</h1>
          <p className="text-sm text-slate-500">
            Showing {jobs.length} results
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
