import HeroSection from "@/components/team/Hero";
import Team from "@/components/team/Team";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack developer with 8+ years experience in React and Node.js",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Creative designer passionate about user-centered design and modern interfaces",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Mike Rodriguez",
      role: "Backend Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Backend specialist focused on scalable architecture and cloud solutions",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emily Davis",
      role: "DevOps Engineer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Infrastructure expert ensuring smooth deployments and system reliability",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Team Hero Section (Dark) */}
      <div className="text-white bg-black">
        <HeroSection
          subtitle="Meet the Team"
          title="The People Behind ORREL"
          description="Our dedicated team of engineers, designers, and innovators are building the future of AI, robotics, renewable energy, and immersive technologies."
        />
      </div>

      {/* Team Members Section (White) */}
      <Team teamMembers={teamMembers} />
    </div>
  );
}
