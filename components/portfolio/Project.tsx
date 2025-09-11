"use client";

import { useState, useRef, useEffect } from "react";
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
    image: "/portfolio/portfolio.png",
    category: "Edtech",
    keywords: ["Edtech", "Community impact", "Sustainability focus"],
  },
  {
    id: 2,
    title: "Smart Farm Energy Automation",
    description: "Innovating the future of robotics for various industries.",
    image: "/portfolio/portfolio.png",
    category: "AI & Robotics",
    keywords: ["Renewable energy", "Community impact", "Sustainability focus"],
  },
  {
    id: 3,
    title: "Solar Energy Initiative",
    description:
      "Transforming communities through sustainable solar energy solutions.",
    image: "/portfolio/portfolio.png",
    category: "Renewable Energy",
    keywords: ["Renewable energy", "Community impact", "Sustainability focus"],
  },
  {
    id: 4,
    title: "Smart Farm Energy Automation",
    description: "Innovating future of robotics for various industries.",
    image: "/portfolio/portfolio.png",
    category: "Renewable Energy",
    keywords: ["Renewable energy", "Community impact", "Sustainability focus"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Enable smooth native momentum scroll on iOS
    el.style.setProperty("-webkit-overflow-scrolling", "touch");

    // Allow horizontal pan gestures
    el.style.touchAction = "pan-x";

    // Scroll snapping
    el.style.scrollSnapType = "x mandatory";

    // Drag-to-scroll
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.pageX;
      scrollLeft = el.scrollLeft;
      el.classList.add("dragging");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const x = e.pageX;
      const walk = startX - x;
      el.scrollLeft = scrollLeft + walk;
    };

    const onPointerUp = () => {
      isDown = false;
      el.classList.remove("dragging");
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ---------- Filter / Category bar ---------- */}
      <section className="px-6 mb-12 mt-[62px]">
        <div className="mx-auto max-w-7xl">
          <div
            ref={scrollRef}
            className="flex items-center overflow-x-auto flex-nowrap snap-x snap-mandatory scrollbar-hide lg:overflow-hidden"
            style={{
              width: "100%",
              borderRadius: "100px",
              border: "1px solid #E8E8E8",
              background: "#F5F5F5",
              padding: "8px",
              margin: "0 auto",
              scrollBehavior: "smooth",
            }}
          >

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex justify-center items-center rounded-full transition-all duration-300 flex-shrink-0 snap-start 
                  ${
                    activeCategory === category
                      ? "bg-black text-white shadow-md"
                      : "bg-transparent text-gray-800 hover:bg-gray-200"
                  }`}
                style={{
                  padding: "10px 20px",
                  textAlign: "center",
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "24px",
                  letterSpacing: "0.16px",
                  whiteSpace: "nowrap",
                  marginLeft: 8,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Portfolio Grid ---------- */}
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
