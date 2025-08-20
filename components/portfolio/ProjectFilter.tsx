"use client";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-lg border text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-blue-600 text-white border-blue-600"
              : "text-gray-600 border-gray-300 hover:text-blue-600 hover:border-blue-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
