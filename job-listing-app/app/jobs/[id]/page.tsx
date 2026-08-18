// app/jobs/[id]/page.tsx
import { jobs } from "@/data/jobs";
import { notFound } from "next/navigation";

interface JobDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function JobDetailsPage({ params }: JobDetailsPageProps) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-10 sm:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl bg-white p-8">
          <h1 className="text-2xl font-bold text-slate-900">{job.title}</h1>

          <section className="mt-6">
            <h2 className="text-lg font-bold text-slate-900">Description</h2>
            <p className="mt-2 leading-relaxed text-slate-700">
              {job.description}
            </p>
          </section>
        </div>

        <aside className="h-fit rounded-3xl bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">About</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-slate-500">Posted On</dt>
              <dd className="font-medium text-slate-900">{job.postedOn}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Deadline</dt>
              <dd className="font-medium text-slate-900">{job.deadline}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Location</dt>
              <dd className="font-medium text-slate-900">{job.location}</dd>
            </div>
          </dl>

          <h2 className="mt-6 text-lg font-bold text-slate-900">Categories</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {job.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600"
              >
                {category}
              </span>
            ))}
          </div>

          <h2 className="mt-6 text-lg font-bold text-slate-900">
            Required Skills
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
