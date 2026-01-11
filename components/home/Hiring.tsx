"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Job {
  _id: string;
  title: string;
  location: string;
  type: string;
  summary: string;
}

const Hiring = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/hirings`);
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data.slice(0, 3)); // show only top 3
      } catch (err) {
        console.error("❌ Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="py-[80px] sm:py-[100px] md:py-[120px] bg-white">
      <div className="px-6 sm:px-10 md:px-[120px] mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <p
            className="mb-4 ppEditorial text-2xl sm:text-3xl md:text-[48px] leading-tight md:leading-[58px] font-light"
            style={{ letterSpacing: "0.02em" }}
          >
            <span className="italic text-green-600">Join</span> Our Growing Team
          </p>
          <p className="text-sm text-gray-600 sm:text-base md:text-lg">
            Be part of a multidisciplinary team driving innovation in AI,
            Energy, XR, and more. Together, we’re shaping Africa’s digital
            future.
          </p>
        </div>

        {/* Job Cards */}
        {loading ? (
          <p className="text-center text-gray-500">Loading openings...</p>
        ) : jobs.length === 0 ? (
          <p className="text-center text-gray-500">
            No current openings — check back soon!
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="flex flex-col justify-between p-6 border rounded-[16px] hover:shadow-md transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    📍 {job.location} | {job.type}
                  </p>
                  <p className="mt-3 text-sm text-gray-700 line-clamp-3">
                    {job.summary}
                  </p>
                </div>
                <Link
                  href="/hiring"
                  className="inline-flex items-center gap-2 mt-4 font-medium text-green-700 hover:underline"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/hiring"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-light border-2 border-black rounded-lg text-sm sm:text-base transition-colors duration-300 hover:bg-black hover:text-white"
          >
            See All Openings <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hiring;
