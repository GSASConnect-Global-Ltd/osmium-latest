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
  
} from 'lucide-react';

import Hero from '@/components/about/Hero'
import Main from '@/components/about/Main'
import Blog from '@/components/home/Blog';
import CTASection from '@/components/home/CTA';

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
     <Hero />
      <Main />
      <Blog />
      <CTASection />

    </div>
  );
};

export default About;
