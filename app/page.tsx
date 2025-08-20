// app/page.tsx

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import Hero from "@/components/home/Hero";

// Import images
import aiRoboticsImg from "@/assets/ai-robotics.jpg";
import digitalTwinImg from "@/assets/digital-twin.jpg";
import gameDevImg from "@/assets/game-development.jpg";
import softwareImg from "@/assets/software-engineering.jpg";
import renewableImg from "@/assets/renewable-energy.jpg";
import xrImg from "@/assets/extended-reality.jpg";
import smartHomesImg from "@/assets/smart-homes.jpg";

// Define backend blog post type
interface BlogPostFromAPI {
  _id: string;
  title: string;
  summary: string;
  images: string[]; // paths from backend
}



export default function Home() {

  const [blogPosts, setBlogPosts] = useState<BlogPostFromAPI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchBlogPosts = async () => {
    try {
      // ✅ Fetch only recent blogs
      const res = await fetch("http://localhost:5000/api/blogs/recent");
      if (!res.ok) throw new Error("Failed to fetch blogs");

      const data: BlogPostFromAPI[] = await res.json();

      // Prepend full URL to images
      const mapped = data.map((post) => ({
        ...post,
        images: post.images.map((img) => `http://localhost:5000${img}`),
      }));

      setBlogPosts(mapped);
    } catch (err) {
      console.error("❌ Error fetching blog posts:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchBlogPosts();
}, []);

  return (
    <div className="min-h-screen font-sans text-black transition-colors duration-300 bg-white">
      <Hero />

      <div id="ai-robotics">
        <Section
          title="AI & Robotics"
          description="Revolutionizing industries through intelligent automation and advanced robotic systems. Our AI-driven solutions combine machine learning, computer vision, and robotics to create autonomous systems that enhance productivity and safety across manufacturing, healthcare, and service sectors."
          image={aiRoboticsImg}
          imageAlt="AI and Robotics Technology"
          ctaText="Explore AI Solutions"
        />
      </div>

      <div id="digital-twin">
        <Section
          title="Digital Twin Technology"
          description="Creating precise digital replicas of physical systems to optimize performance, predict maintenance needs, and accelerate innovation. Our digital twin solutions enable real-time monitoring, simulation, and analysis for smart cities, industrial facilities, and complex infrastructure projects."
          image={digitalTwinImg}
          imageAlt="Digital Twin Technology"
          ctaText="Discover Digital Twins"
          reverse
        />
      </div>

      <div id="game-dev">
        <Section
          title="Game Development"
          description="Crafting immersive gaming experiences through cutting-edge technology and innovative design. From mobile games to AAA productions, we leverage advanced graphics engines, AI-driven gameplay, and cross-platform development to create engaging entertainment solutions."
          image={gameDevImg}
          imageAlt="Game Development"
          ctaText="View Our Games"
        />
      </div>

      <div id="software">
        <Section
          title="Software Engineering"
          description="Building robust, scalable software solutions that drive digital transformation. Our engineering expertise spans cloud-native applications, enterprise systems, and custom software development with a focus on performance, security, and user experience."
          image={softwareImg}
          imageAlt="Software Engineering"
          ctaText="See Our Work"
          reverse
        />
      </div>

      <div id="renewable">
        <Section
          title="Renewable Energies"
          description="Accelerating the transition to sustainable energy through innovative technology solutions. We develop smart grid systems, energy management platforms, and IoT-enabled renewable energy solutions that maximize efficiency and reduce environmental impact."
          image={renewableImg}
          imageAlt="Renewable Energy Solutions"
          ctaText="Learn About Energy"
        />
      </div>

      <div id="xr">
        <Section
          title="Extended Reality"
          description="Pushing the boundaries of reality with immersive XR experiences that blend virtual and physical worlds. Our extended reality solutions encompass VR, AR, and MR applications for training, visualization, entertainment, and collaborative work environments."
          image={xrImg}
          imageAlt="Extended Reality Technology"
          ctaText="Experience XR"
          reverse
        />
      </div>

      <div id="smart-homes">
        <Section
          title="Smart Homes Concept"
          description="Transforming living spaces into intelligent environments that adapt to user preferences and optimize comfort, security, and energy efficiency. Our smart home solutions integrate IoT devices, AI automation, and intuitive interfaces for seamless home management."
          image={smartHomesImg}
          imageAlt="Smart Homes Technology"
          ctaText="Explore Smart Living"
        />

        {/* Why Choose Us Section */}
        <section className="py-20 text-center text-white bg-black">
          <h2 className="mb-8 text-4xl font-bold">Why Choose Us</h2>
          <ul className="max-w-3xl mx-auto space-y-4 text-lg text-left">
            <li>✅ 3+ years in tech innovation</li>
            <li>✅ Proven track record in renewable energy integrations</li>
            <li>✅ Custom XR experiences for training and entertainment</li>
          </ul>
        </section>

        {/* Featured Portfolio Teasers */}
        {/* Featured Portfolio Teasers */}
        <section className="py-20">
          <h2 className="mb-12 text-4xl font-bold text-center">Featured Portfolio</h2>
          <div className="flex justify-center gap-8 px-4 overflow-x-auto">
            {[
              "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1169&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=687&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1622050756792-5b1180bbb873?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ].map((url, i) => (
              <div key={i} className="min-w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={url}
                  alt={`Portfolio ${i + 1}`}
                  className="object-cover w-full h-48"
                  width={300}
                  height={192}
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">Project {i + 1}</h3>
                  <p className="mb-2 text-sm text-gray-700">
                    Short description of this project highlighting innovation and impact.
                  </p>
                  <button className="px-4 py-2 font-semibold text-black transition border border-black rounded hover:bg-black hover:text-white">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

         {/* Latest Blog Posts Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="mb-12 text-4xl font-bold text-center">Latest Blog Posts</h2>

        {loading ? (
          <p className="text-center text-black">Loading blog posts...</p>
        ) : blogPosts.length === 0 ? (
          <p className="text-center text-black">No blog posts available.</p>
        ) : (
          <div className="flex justify-center gap-8 px-4 overflow-x-auto">
            {blogPosts.map((post, i) => (
              <div key={post._id} className="min-w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                {post.images[0] && (
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    className="object-cover w-full h-48"
                    width={300}
                    height={192}
                  />
                )}
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                  <p className="mb-2 text-sm text-gray-700">{post.summary}</p>
                  <Link href={`/blog/${post._id}`}>
                    <button className="px-4 py-2 font-semibold text-black transition border border-black rounded hover:bg-black hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

        {/* CTA Footer Banner */}
        <section className="py-20 text-center text-white bg-black">
          <h2 className="mb-4 text-4xl font-bold">Ready to innovate? Contact us today.</h2>
          <form className="flex flex-col max-w-2xl gap-4 mx-auto mt-6">
            <input type="text" placeholder="Your Name" className="p-3 text-black rounded" />
            <input type="email" placeholder="Your Email" className="p-3 text-black rounded" />
            <textarea placeholder="Your Message" rows={4} className="p-3 text-black rounded"></textarea>
            <button type="submit" className="py-3 font-semibold text-black transition bg-white rounded hover:bg-gray-200">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
