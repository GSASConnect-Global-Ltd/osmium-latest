// components/about/TeamSection.tsx
"use client";

import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  github: string;
  linkedin: string;
  twitter: string;
};

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 
          style={{
            fontWeight: 200,
            fontStyle: "ultralight",
            letterSpacing: "-2%",
            textAlign: "center",
          }}
          className="mb-12 text-center ppEditorial text-[28px] sm:text-[36px] md:text-[48px] 
                     leading-[36px] sm:leading-[44px] md:leading-[56px] text-foreground">
            Meet the Team
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-[Satoshi] text-[16px] sm:text-[18px] leading-relaxed">
            The brilliant minds driving ORREL’s mission of innovation, 
            sustainability, and technological excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center bg-card dark:bg-muted rounded-2xl p-6 
              hover:bg-muted/60 transition duration-500 transform hover:-translate-y-2 hover:scale-[1.03]"
            >
              <div className="relative w-40 h-40 mb-6 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-all duration-500" />
              </div>

              <h3 className="font-[Satoshi] text-[20px] sm:text-[22px] font-medium text-foreground transition duration-300 group-hover:text-primary">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-[Satoshi] mt-1 mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-[14px] sm:text-[15px] leading-[22px] mb-4 transition-opacity duration-500 group-hover:opacity-80">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-auto">
                {[ 
                  { icon: Github, href: member.github },
                  { icon: Linkedin, href: member.linkedin },
                  { icon: Twitter, href: member.twitter }
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
