"use client";

interface BlogCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogCategories = ({
  categories,
  activeCategory,
  onCategoryChange,
}: BlogCategoriesProps) => {
  return (
    <section className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* parent container */}
        <div className="flex flex-wrap justify-center gap-2 rounded-full border border-[#E8E8E8] bg-white p-2 w-fit mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)} style={{fontFamily: "Satoshi"}}
              className={`flex items-center justify-center rounded-full font-satoshi font-medium text-[16px] leading-6 tracking-[0.01em] transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-[#10150C] text-white px-4 md:px-6 h-11 w-auto shadow-sm"
                    : "bg-transparent text-[#10150C] hover:bg-[#F5F5F5] px-4 md:px-6 h-11 w-auto"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
