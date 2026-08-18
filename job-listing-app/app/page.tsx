import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 px-4 text-center">
      <h1 className="text-4xl font-bold text-zinc-50">
        Find Your Next Opportunity
      </h1>
      <p className="mt-4 max-w-md text-zinc-400">
        Browse open positions from organizations across Ethiopia, and track
        applicants all in one place.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/jobs"
          className="rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
        >
          Browse Jobs
        </Link>
        <Link
          href="/dashboard"
          className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-50 transition hover:bg-zinc-800"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  );
}
