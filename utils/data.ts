export const projects: Project[] = [
  {
    id: "1",
    name: "Banking System - Bank Aladin Syariah",
    year: "2021",
    isFeatured: true,
    builtWith: ["React", "Tailwindcss", "Keycloak"],
    madeAt: "Sirkel Kreasi Nusantara",
    role: "Front End Engineer",
    description: "lorem ipsum",
    achievements: ["Setup IAM using Keycloak.js"],
  },
  {
    id: "2",
    name: "Certifast",
    year: "2021",
    isOnGoing: true,
    links: [
      {
        type: "website",
        link: "https://certifast.vercel.app/",
      },
    ],
    achievements: [
      "Used by more than 700 people",
      "Has created 50K certificates with total file size downloaded up to 30 GB",
    ],
    builtWith: ["React", "WebAssembly", "Rust"],
    isFeatured: true,
    description: "lorem ipsum",
    role: "Creator",
  },
  {
    id: "3",
    name: "ERP - Smart Factory PT. SKA Tarakan",
    year: "2021",
    isFeatured: true,
    builtWith: ["React", "Electron", "React Native"],
    role: "Front End Engineer",
    description:
      "Enterprise Resource Planning Software which built for PT. SKA Tarakan includes Human Resources System, Machinery Monitoring System and Company’s Unit Monitoring System. The projects deliverable contains Desktop App, Mobile App, and Web app. And my responsibilities in this project are:",
    achievements: [
      "Create reusable components for web app and desktop app",
      "Integrate frontend apps with microservices",
      "Setup design and architecture for web app and desktop app",
    ],
  },
  {
    id: "4",
    name: "Muslim Illustrations",
    description: "lorem ipsum",
    builtWith: ["Next.js", "Chakra UI", "Supabase"],
    role: "Creator",
    links: [
      {
        type: "website",
        link: "https://muslimillustrations.co",
      },
      {
        type: "github",
        link: "https://github.com/azharalifauzi/muslim-illustrations-v2",
      },
    ],
  },
  {
    id: "5",
    name: "Jadiberkah.id",
    description: "lorem ipsum",
    builtWith: ["Laravel", "HTML", "CSS"],
    role: "UI Engineer",
    links: [{ type: "website", link: "https://jadiberkah.id" }],
    madeAt: "PT Sirkel Kreasi Nusantara",
  },
  {
    id: "6",
    name: "Bank Syariah Indonesia",
    description: "lorem ipsum",
    builtWith: ["Laravel", "HTML", "CSS"],
    role: "UI Engineer",
    links: [{ type: "website", link: "https://bankbsi.co.id" }],
    madeAt: "PT Sirkel Kreasi Nusantara",
  },
  {
    id: "7",
    name: "Weeber Indonesia",
    description: "lorem ipsum",
    builtWith: ["React", "SASS", "CRA"],
    role: "Front End Engineer",
    links: [
      {
        type: "website",
        link: "https://weeber.id",
      },
      {
        type: "github",
        link: "https://github.com/weeber-id/weeber-website",
      },
    ],
    madeAt: "Weeber Indonesia",
  },
  {
    id: "8",
    name: "Blockchain Voting App",
    description: "Voting app built on top of ethereum blockchain.",
    builtWith: ["Solidity", "Ethers.js", "React"],
    links: [
      {
        type: "github",
        link: "https://github.com/azharalifauzi/president-voting-app",
      },
    ],
    year: "2021",
  },
  {
    id: "9",
    name: "Health Consultation App",
    description:
      "Healthcare mobile app, built using React Native and Firebase.",
    builtWith: ["React Native", "Firebase"],
    links: [
      {
        type: "github",
        link: "https://github.com/azharalifauzi/my-doctor",
      },
    ],
    isArchive: true,
  },
  {
    id: "10",
    name: "Star Power PLN",
    description: "ERP built for PT. PLN Indonesia.",
    builtWith: ["React", "Ionic", "Typescript"],
    year: "2020",
    madeAt: "PT Sirkel Kreasi Nusantara",
    role: "Front End Engineer",
  },
];
