import Link from "next/link";
import Image from "next/image";
import { Job } from "@/types/job";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="block rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <Image
          src={job.avatar}
          alt={job.company}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold text-slate-900">{job.title}</h2>
          <p className="text-sm text-slate-500">
            {job.company} <span className="mx-1">·</span> {job.location}
          </p>
        </div>
      </div>

      <p className="mt-4 text-slate-700 leading-relaxed">{job.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
          {job.jobType}
        </span>
        {job.categories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-amber-400 px-3 py-1 text-sm font-medium text-amber-600"
          >
            {category}
          </span>
        ))}
      </div>
    </Link>
  );
}
