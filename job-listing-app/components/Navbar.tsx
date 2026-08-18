import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 px-4 py-4 sm:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-lg font-bold text-zinc-50">
          JobBoard
        </Link>
        <div className="flex gap-6 text-sm font-medium text-zinc-300">
          <Link href="/jobs" className="hover:text-white">
            Jobs
          </Link>
          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
