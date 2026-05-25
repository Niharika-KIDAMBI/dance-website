"use client";

import Link from "next/link";

export default function Courses() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-yellow-500">
        Courses
      </h1>

      <a
  href="https://topmate.io/patnam_sivaprasad"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
>
  Enroll Now
</a>

      <Link
        href="/"
        className="mt-6 border border-yellow-500 px-4 py-2 text-yellow-500"
      >
        Back Home
      </Link>
    </main>
  );
}