"use client";

import Link from "next/link";

export default function Courses() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-yellow-500">
        Courses
      </h1>

      <p className="mt-4">
        Course details will be updated soon.
      </p>

      <Link
        href="/"
        className="mt-6 border border-yellow-500 px-4 py-2 text-yellow-500"
      >
        Back Home
      </Link>
    </main>
  );
}