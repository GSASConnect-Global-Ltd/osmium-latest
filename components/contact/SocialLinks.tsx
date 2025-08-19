import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      label: "Follow us on LinkedIn",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      label: "Follow us on Twitter",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      label: "Like us on Facebook",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      label: "Follow us on Instagram",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      label: "Check out our GitHub",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialPlatforms.map((platform) => {
        const Icon = platform.icon;
        return (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={platform.label}
            className="flex items-center justify-center w-10 h-10 border border-gray-700 rounded-full text-gray-700 hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
