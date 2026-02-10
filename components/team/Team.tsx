"use client";

import Image from "next/image";
import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

interface Social {
  platform: string;
  url: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  socials?: Social[];
}

interface TeamProps {
  teamMembers: TeamMemberProps[];
}

const TeamSection = ({ teamMembers }: TeamProps) => {
  // Helper to render correct icon for social platform
  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "facebook":
        return <Facebook className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      default:
        return <span className="text-xs">{platform}</span>; // fallback
    }
  };

  return (
    <section id="team" className="px-4 py-20 text-gray-900 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3
          className="mb-16 text-4xl font-light text-center sm:text-5xl ppEditorial"
          style={{ letterSpacing: "2%" }}
        >
          Our <span className="text-green-600">Team</span>
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 bg-gray-100 rounded-lg hover:scale-105"
            >
              {/* Profile Image */}
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-3">
                <h4
                  className="text-xl font-semibold ppEditorial"
                  style={{ letterSpacing: "1%" }}
                >
                  {member.name}
                </h4>

                <p
                  className="font-medium text-green-600"
                  style={{
                    fontFamily: "Satoshi",
                    letterSpacing: "0.5%",
                  }}
                >
                  {member.role}
                </p>

                {member.bio && (
                  <p
                    className="text-sm text-gray-600"
                    style={{
                      fontFamily: "Satoshi",
                      fontWeight: 400,
                      lineHeight: "1.6",
                    }}
                  >
                    {member.bio}
                  </p>
                )}

                {/* Social Links */}
                <div className="flex space-x-3 mt-2">
                  {member.socials?.map((social, i) => {
                    const url = social.url.startsWith("http")
                      ? social.url
                      : `https://${social.url}`;
                    return (
                      <a
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 transition-colors hover:text-green-600"
                        title={social.platform}
                      >
                        {renderSocialIcon(social.platform)}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
