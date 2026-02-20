// types/team.ts
export interface Social {
  platform: string;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
  socials: Social[];
}
