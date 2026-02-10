"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "@/components/team/Hero";
import Team from "@/components/team/Team";

interface Social {
  platform: string;
  url: string;
}

interface TeamMember {
  _id?: string;
  name: string;
  post: string;
  bio?: string;
  photo?: string;
  socials?: Social[];
}

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  const IMG_UPLOAD_PATH =
    process.env.NEXT_PUBLIC_IMG_UPLOAD_PATH ||
    "http://localhost:5000/uploads/team";

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/team`
        );
        setTeamMembers(data);
      } catch (err) {
        console.error("Failed to fetch team members", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  if (loading) return <p>Loading team members...</p>;

  // Transform data for Team component
  const formattedTeam = teamMembers.map((member) => ({
    name: member.name,
    role: member.post,
    bio: member.bio,
    image: member.photo ? `${IMG_UPLOAD_PATH}/${member.photo}` : "/default-avatar.png",
    socials: member.socials || [],
  }));

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
      <Team teamMembers={formattedTeam} />
    </div>
  );
}
