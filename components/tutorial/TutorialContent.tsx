"use client";

const TutorialContent = () => {
  return (
    <div className="p-8 bg-white shadow-sm rounded-2xl">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">
        Lesson Overview
      </h2>

      <p className="leading-relaxed text-gray-600">
        This lesson introduces the core principles required to understand
        advanced topics. You’ll learn foundational concepts, terminology, and
        practical applications through guided explanations.
      </p>

      <div className="mt-6">
        <h3 className="mb-2 font-semibold text-gray-900">
          Key Topics Covered
        </h3>

        <ul className="pl-6 space-y-2 text-gray-600 list-disc">
          <li>System overview</li>
          <li>Core terminology</li>
          <li>Real-world applications</li>
        </ul>
      </div>
    </div>
  );
};

export default TutorialContent;
