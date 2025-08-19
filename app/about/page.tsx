'use client';

import Image from 'next/image';
import React from 'react';
import { ExpertiseCard } from '@/components/about/ExpertiseCard';
import { TeamMember } from '@/components/about/TeamMember';
import { ValueCard } from '@/components/about/ValueCard';
import { 
  Brain, 
  Cpu, 
  Gamepad2, 
  Code, 
  Zap, 
  Glasses, 
  Home,
  Lightbulb,
  Leaf,
  Users,
  ArrowRight
} from 'lucide-react';
import teamHeroImage from '@/assets/team-hero.jpg';
import techAbstractImage from '@/assets/tech-abstract.jpg';

const About = () => {
  const expertiseAreas = [
    { title: "AI & Robotics", description: "Specializing in neural networks, sensor fusion, and autonomous systems that push the boundaries of intelligent automation.", icon: <Brain className="w-8 h-8 text-[var(--foreground)]" /> },
    { title: "Digital Twin Technology", description: "Creating virtual replicas for predictive maintenance in industries, enabling real-time monitoring and optimization.", icon: <Cpu className="w-8 h-8 text-[var(--foreground)]" /> },
    { title: "Game Development", description: "From 2D mobile games to immersive 3D worlds using Unity/Unreal, crafting engaging interactive experiences.", icon: <Gamepad2 className="w-8 h-8 text-[var(--foreground)]" /> },
    { title: "Software Engineering", description: "Full-stack development with agile methodologies, from mobile apps to enterprise systems and cloud solutions.", icon: <Code className="w-8 h-8 text-[var(--foreground)]" /> },
    { title: "Renewable Energies", description: "Solutions for solar/wind optimization using AI analytics to maximize efficiency and sustainability.", icon: <Zap className="w-8 h-8 text-[var(--foreground)]" /> },
    { title: "Extended Reality", description: "AR/VR/MR experiences for education, retail, and training that transform how people interact with digital content.", icon: <Glasses className="w-8 h-8 text-[var(--foreground)]" /> },
    { title: "Smart Homes Concept", description: "IoT integrations for energy-efficient, automated living spaces that adapt to user preferences and environmental conditions.", icon: <Home className="w-8 h-8 text-[var(--foreground)]" /> }
  ];

  const teamMembers = [
    { name: "John Doe", role: "Lead AI Engineer", bio: "Expert in robotics with 5 patents in machine learning. Pioneered our autonomous systems division." },
    { name: "Sarah Chen", role: "Digital Twin Architect", bio: "15+ years in industrial automation. Lead architect of our predictive maintenance platform." },
    { name: "Mike Rodriguez", role: "XR Technology Director", bio: "Award-winning developer in VR/AR with expertise in immersive education platforms." },
    { name: "Emily Zhang", role: "Renewable Energy Specialist", bio: "PhD in Energy Systems. Develops AI-driven optimization algorithms for sustainable energy solutions." }
  ];

  const values = [
    { title: "Innovation", description: "Constantly pushing technological boundaries to create solutions that didn't exist yesterday.", icon: <Lightbulb className="w-8 h-8 text-[var(--foreground)]" /> },
    { title: "Sustainability", description: "Every solution we create considers environmental impact and contributes to a greener future.", icon: <Leaf className="w-8 h-8 text-[var(--foreground)]" /> },
    { title: "Client-Centric", description: "Your success drives our innovation. We build solutions that exceed expectations and deliver real value.", icon: <Users className="w-8 h-8 text-[var(--foreground)]" /> }
  ];

  const milestones = [
    { year: "2015", title: "Company Founded", description: "Started with software engineering, building our first enterprise solutions." },
    { year: "2018", title: "AI & Robotics Expansion", description: "Launched our AI division with breakthrough neural network implementations." },
    { year: "2020", title: "First XR Project Launch", description: "Delivered our first major VR training platform for industrial clients." },
    { year: "2021", title: "Digital Twin Innovation", description: "Released industry-leading predictive maintenance solutions." },
    { year: "2022", title: "Renewable Energy Focus", description: "Expanded into sustainable technology with AI-optimized energy systems." },
    { year: "2023", title: "Smart Home Prototype", description: "Launched our revolutionary smart home prototype for eco-friendly living." },
    { year: "2024", title: "Market Leadership", description: "Achieved recognition as industry leaders in integrated technology solutions." }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={teamHeroImage} alt="Team Hero" layout="fill" objectFit="cover" className="z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] z-10"></div>
        </div>
        <div className="relative z-20 container mx-auto px-4 py-32 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              About TechPioneers: <span className="block text-white/90">Pioneers in Advanced Technologies</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-white/80">
              Bridging digital and physical worlds through innovative solutions that shape the future.
            </p>
            <button className="inline-flex items-center bg-[var(--foreground)] hover:opacity-90 text-[var(--background)] font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Discover Our Journey
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-[var(--foreground)]">Our Story</h2>
            <div className="space-y-6 leading-relaxed">
              <p className="text-[var(--foreground)]">
                Founded in 2015, we started with a vision to revolutionize how businesses approach technology. 
                What began as a software engineering company has evolved into a comprehensive technology powerhouse, 
                expanding into AI & Robotics in 2018 and now leading innovations in renewable energies and Extended Reality.
              </p>
              <p className="text-[var(--foreground)]">
                Our journey reflects the rapid evolution of technology itself. As new challenges emerged, 
                we did not just adapt—we anticipated, innovated, and led the charge into uncharted technological territories.
              </p> 
              <div className="bg-[var(--footer-bg)] p-6 rounded-lg border-l-4 border-[var(--foreground)]">
                <h3 className="font-semibold mb-2 text-[var(--foreground)]">Our Mission</h3>
                <p className="text-[var(--foreground)] text-sm">
                  To bridge digital and physical worlds through innovative services like Digital Twin Technology 
                  and Smart Homes Concept, creating solutions that enhance human potential while preserving our planet.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={techAbstractImage} alt="Technology visualization" className="rounded-lg shadow-lg w-full" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--foreground)] rounded-full flex items-center justify-center text-[var(--background)] font-bold text-lg">
              9+ <span className="text-xs ml-1">Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 bg-[var(--footer-bg)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Our Expertise</h2>
            <p className="text-xl text-[var(--foreground)] max-w-2xl mx-auto">
              Seven core areas where we deliver cutting-edge solutions that drive real business impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard
                key={index}
                title={area.title}
                description={area.description}
                icon={area.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Meet Our Team</h2>
          <p className="text-xl text-[var(--foreground)] max-w-2xl mx-auto">
            Brilliant minds united by a passion for innovation and a commitment to excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[var(--footer-bg)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Our Values</h2>
            <p className="text-xl text-[var(--foreground)] max-w-2xl mx-auto">
              The principles that guide every decision and drive every innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Our Journey</h2>
          <p className="text-xl text-[var(--foreground)] max-w-2xl mx-auto">
            Key milestones that mark our evolution from startup to industry leader.
          </p>
        </div>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between border-l-4 border-[var(--foreground)] pl-6">
              <span className="text-xl font-bold text-[var(--foreground)]">{milestone.year}</span>
              <div className="mt-2 md:mt-0">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{milestone.title}</h3>
                <p className="text-sm text-[var(--foreground)]">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--foreground)] text-[var(--background)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Let’s build the future together.
          </p>
          <button className="inline-flex items-center bg-[var(--background)] text-[var(--foreground)] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90">
            Contact Us Today
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
