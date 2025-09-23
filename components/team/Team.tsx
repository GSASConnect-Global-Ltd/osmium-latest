"use client";

import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

const TeamSection = ({ teamMembers }: TeamSectionProps) => {
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
                  sizes="(max-width: 768px) 100vw, 
                         (max-width: 1200px) 50vw, 
                         25vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-3">
                {/* Name */}
                <h4
                  className="text-xl font-semibold ppEditorial"
                  style={{ letterSpacing: "1%" }}
                >
                  {member.name}
                </h4>

                {/* Role */}
                <p
                  className="font-medium text-green-600"
                  style={{
                    fontFamily: "Satoshi",
                    letterSpacing: "0.5%",
                  }}
                >
                  {member.role}
                </p>

                {/* Bio */}
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

                {/* Social Links */}
                <div className="flex space-x-3">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 transition-colors hover:text-green-600"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 transition-colors hover:text-green-600"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 transition-colors hover:text-green-600"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
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
