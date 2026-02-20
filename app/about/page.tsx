"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "@/components/about/Hero";
import Main from "@/components/about/Main";
import TeamSection from "@/components/about/TeamSection";
import Blog from "@/components/home/Blog";
import CTASection from "@/components/home/CTA";

import type { TeamMember, Social } from "@/types/team";

// API response type
interface TeamMemberFromAPI {
  _id?: string;
  name: string;
  post: string;
  bio?: string;
  photo?: string;
  socials?: Social[];
}

const About = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get<TeamMemberFromAPI[]>(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/team`
        );

        // normalize API response to match TeamMember type
        const normalized: TeamMember[] = res.data.map((member) => {
          const imageUrl = member.photo
            ? member.photo.startsWith("http")
              ? member.photo
              : `${
                  process.env.NEXT_PUBLIC_IMG_UPLOAD_PATH ||
                  "http://localhost:5000/uploads/team"
                }/${member.photo}`
            : "/default-avatar.png";

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

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Hero />
      <Main />

      {loading ? (
        <div className="py-20 text-center">
          <p className="text-lg">Loading team members...</p>
        </div>
      ) : (
        <TeamSection teamMembers={teamMembers} />
      )}

      <Blog />
      <CTASection />
    </div>
  );
};

export default About;
