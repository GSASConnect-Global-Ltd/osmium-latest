"use client";

import TutorialSidebar from "./TutorialSidebar";
import TutorialPlayer from "./TutorialPlayer";
import TutorialContent from "./TutorialContent";

const TutorialLayout = () => {
  return (
    <section className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <TutorialSidebar />

      {/* Main Area */}
      <main className="flex flex-col flex-1 gap-6 p-6 md:p-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Tutorial Dashboard
          </h1>
          <p className="text-gray-500">
            Learn step-by-step with guided video lessons
          </p>
        </div>

        {/* Video */}
        <TutorialPlayer />

        {/* Content */}
        <TutorialContent />
      </main>
    </section>
  );
};

export default TutorialLayout;
