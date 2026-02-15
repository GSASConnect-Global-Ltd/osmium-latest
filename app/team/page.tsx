"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "@/components/team/Hero";
import Team from "@/components/team/Team";

interface Social {
  platform: string;
  url: string;
}

interface TeamMemberFromAPI {
  _id?: string;
  name: string;
  post: string;
  bio?: string;
  photo?: string;
  socials?: Social[];
}

interface TeamMemberNormalized {
  name: string;
  role: string;
  bio?: string;
  image: string;
  socials: Social[];
}

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMemberNormalized[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get<TeamMemberFromAPI[]>(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/team`
        );

        const normalized: TeamMemberNormalized[] = res.data.map((member) => {
          let imageUrl = "/default-avatar.png";

          if (member.photo) {
            imageUrl = member.photo.startsWith("http")
              ? member.photo
              : `${process.env.NEXT_PUBLIC_IMG_UPLOAD_PATH || "http://localhost:5000/uploads/team"}/${member.photo}`;
          }

          return {
            name: member.name,
            role: member.post,
            bio: member.bio,
            image: imageUrl,
            socials: member.socials || [],
          };
        });

        setTeamMembers(normalized);
      } catch (err) {
        console.error("❌ Error fetching team members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-lg text-black">Loading team members...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-white bg-black">
        <HeroSection
          subtitle="Meet the Team"
          title="The People Behind ORREL"
          description="Our dedicated team of engineers, designers, and innovators are building the future of AI, robotics, renewable energy, and immersive technologies."
        />
      </div>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <Team teamMembers={teamMembers} />
        </div>
      </section>
    </div>
  );
}
