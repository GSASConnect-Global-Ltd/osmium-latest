"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Job {
  _id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  summary: string;
  department: string;
}

const HiringPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [applicationLoading, setApplicationLoading] = useState(false);
  const [applicationMessage, setApplicationMessage] = useState("");

  const jobsPerPage = 6;
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;


  // ✅ Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/api/hirings`);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("❌ Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // ✅ Filter jobs
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  // ✅ Submit application (with CV + docs)
  const handleApplicationSubmit = async (e: React.FormEvent<HTMLFormElement>, jobId: string) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData();

    // Collect form fields manually
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const coverLetter = (form.elements.namedItem("coverLetter") as HTMLTextAreaElement).value;
    const cv = (form.elements.namedItem("cv") as HTMLInputElement).files?.[0];
    const documents = (form.elements.namedItem("documents") as HTMLInputElement).files;

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("coverLetter", coverLetter);

    if (cv) {
      formData.append("cv", cv); // ✅ Required single CV
    }

    if (documents && documents.length > 0) {
      for (let i = 0; i < documents.length; i++) {
        formData.append("documents", documents[i]); // ✅ Multiple docs
      }
    }

    try {
      setApplicationLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/hirings/${jobId}`, {
      method: "POST",
      body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setApplicationMessage("✅ Application submitted successfully!");
        form.reset(); // Reset form fields
        setTimeout(() => {
          setApplicationMessage("");
          setSelectedJob(null); // Close modal after success
        }, 2000);
      } else {
        setApplicationMessage(`❌ Error: ${data.message || "Failed to submit"}`);
      }
    } catch (err) {
      console.error("❌ Error submitting application:", err);
      setApplicationMessage("❌ Network error submitting application");
    } finally {
      setApplicationLoading(false);
    }
  };

  return (
    <section className="bg-gray-50">
     {/* Hero Section */}
     <div className="bg-black border-b pt-[120px] sm:pt-[150px] lg:pt-[200px]">
      {/* <div className="bg-black border-b pt-20 sm:pt-28 lg:pt-36"> */}

  <div className="max-w-6xl px-6 py-14 sm:py-16 lg:py-20 mx-auto text-center">
    
    {/* Heading */}
    <h1 className="text-2xl font-bold leading-snug text-white 
                   sm:text-4xl 
                   lg:text-5xl">
      Discover your potential and{" "}
      <span className="text-green-500">take your career</span> to new heights today!
    </h1>

    {/* Description */}
    <p className="max-w-2xl mx-auto mt-4 
                  text-base 
                  sm:text-lg 
                  text-gray-300">
      At ORREL, we’re building Africa’s digital and sustainable future. Join us to
      create impact that lasts.
    </p>

    {/* Search */}
    <div className="flex flex-col justify-center gap-4 mt-6 sm:mt-8 sm:flex-row">
      <input
        type="text"
        placeholder="Search by role or keyword"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full px-4 py-3 text-sm sm:text-base
                   border rounded-lg 
                   sm:w-96
                   focus:ring-2 focus:ring-green-600
                   focus:outline-none"
      />
    </div>
  </div>
</div>

      {/* Jobs */}
      <div className="bg-white border-t">
        <div className="max-w-6xl px-6 py-16 mx-auto">
          <h2 className="mb-10 text-2xl font-semibold text-center sm:text-3xl">
            Career Openings
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading jobs...</p>
          ) : filteredJobs.length > 0 ? (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedJobs.map((job) => (
                  <div
                    key={job._id}
                    className="flex flex-col justify-between p-6 transition border rounded-xl hover:border-green-600"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">
                        📍 {job.location} | {job.type}
                      </p>
                      <p className="mt-3 text-sm text-gray-700">{job.summary}</p>
                    </div>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="inline-flex items-center mt-6 font-medium text-green-700 hover:underline"
                    >
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500">No jobs found</p>
          )}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-40">
          <div className="relative w-full max-w-lg p-8 overflow-y-auto bg-white border rounded-xl max-h-[90vh]">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute text-gray-500 top-3 right-3 hover:text-black"
            >
              ✕
            </button>
            <h3 className="mb-4 text-2xl font-semibold">{selectedJob.title}</h3>
            <form
              onSubmit={(e) => handleApplicationSubmit(e, selectedJob._id)}
              className="space-y-4"
              encType="multipart/form-data"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
              <textarea
                name="coverLetter"
                placeholder="Why should we hire you?"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                rows={4}
              />

              {/* ✅ CV upload (required) */}
              <label className="block text-sm font-medium text-gray-700">Upload CV *</label>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />

              {/* ✅ Other documents (optional) */}
              <label className="block text-sm font-medium text-gray-700">Other Supporting Documents</label>
              <input
                type="file"
                name="documents"
                multiple
                accept=".pdf,.doc,.docx"
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />

              <button
                type="submit"
                disabled={applicationLoading}
                className="w-full py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                {applicationLoading ? "Submitting..." : "Submit Application"}
              </button>
            </form>

            {applicationMessage && (
              <p className="mt-4 text-sm text-center text-gray-700">{applicationMessage}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HiringPage;
