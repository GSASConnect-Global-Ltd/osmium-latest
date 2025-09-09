"use client";

import { useState } from "react";
import PortfolioCard from "./Card";


// Categories
const categories = [
  "All",
  "AI & Robotics",
  "Renewable Energy",
  "Digital Twin Tech And VR",
  "Fintech",
  "Edtech",
  "Smart Concepts",
  "Products",
];

// Portfolio Items
const portfolioItems = [
  {
    id: 1,
    title: "GSaas Connect",
    description:
      "An academic bridge platform linking professors with talented postgraduate candidates seeking funding.",
    image: "/portfolio/portfolio.png", // replace with actual image later
    category: "Edtech",
    keywords: ["Edtech", "Community impact", "Sustainability focus"],
  },
  {
    id: 2,
    title: "Smart Farm Energy Automation",
    description:
      "Innovating the future of robotics for various industries.",
    image: "/portfolio/portfolio.png", // replace with actual image later
    category: "AI & Robotics",
    keywords: ["Renewable energy", "Community impact", "Sustainability focus"],
  },
  {
    id: 3,
    title: "Solar Energy Initiative",
    description:
      "Transforming communities through sustainable solar energy solutions.",
    image: "/portfolio/portfolio.png", // replace with actual image later
    category: "Renewable Energy",
    keywords: ["Renewable energy", "Community impact", "Sustainability focus"],
  },

  {
    id: 4,
    title: "Smart Farm Energy Automation",
    description:
      "Innovating future of robotics for various industries.",
    image: "/portfolio/portfolio.png", // replace with actual image later
    category: "Renewable Energy",
    keywords: ["Renewable energy", "Community impact", "Sustainability focus"],
  },
];


const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50"
    style={{
      
    }}
    >
      <section className="px-6 mb-12 mt-[62px]">
  <div className="mx-auto max-w-7xl">
    <div
      className="flex items-center justify-between overflow-hidden"
      style={{
        width: "100%",
        borderRadius: "100px",
        border: "1px solid #E8E8E8",
        background: "#F5F5F5",
        padding: "8px",
        margin: "0 auto",
      }}
    >
      {categories.map((category) => (
              <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`flex justify-center items-center rounded-full transition-all duration-300 flex-1 
            ${activeCategory === category
              ? "bg-black text-white"
              : "bg-transparent text-gray-800"}`}
          style={{
            padding: "10px 12px",
            textAlign: "center",
            fontFamily: "Satoshi",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0.16px",
            whiteSpace: "nowrap",
          }}
        >
          {category}
        </button>

      ))}
    </div>
  </div>
</section>


      {/* Portfolio Grid */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                keywords={item.keywords}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-xl text-gray-600">
                No projects found in this category.
              </p>
              <p className="mt-2 text-gray-500">
                Please select a different category or check back soon for new
                projects.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
