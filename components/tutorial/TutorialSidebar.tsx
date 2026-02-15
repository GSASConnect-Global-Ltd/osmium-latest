"use client";

const lessons = [
  { id: 1, title: "Introduction" },
  { id: 2, title: "Core Concepts" },
  { id: 3, title: "Practical Demo" },
  { id: 4, title: "Summary" },
];

const TutorialSidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-[300px] bg-white border-r shadow-sm sticky top-0 h-screen p-6">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        Course Modules
      </h2>

      <div className="space-y-2">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            className="w-full px-4 py-3 text-left transition rounded-lg hover:bg-gray-100 hover:translate-x-1"
          >
            {lesson.title}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default TutorialSidebar;
