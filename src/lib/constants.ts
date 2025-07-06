import type { Experience } from "@/components/common/ExperienceItem";
import type { Project } from "@/components/common/ProjectCard";
import type { ElementType } from "react";
import {
  MonitorPlay,
  ServerCog,
  DatabaseZap,
  CloudCog,
  Wrench,
  BrainCircuit,
  Webhook,
  Workflow,
  Github,
  Sparkles,
  Wand2,
  Camera,
} from "lucide-react";

import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiMysql,
  DiPostgresql,
  DiRedis,
  DiDocker,
} from "react-icons/di";
import {
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiElasticsearch,
  SiKubernetes,
  SiPostman,
  SiWebstorm,
  SiOpenai,
  SiAmazonwebservices,
} from "react-icons/si";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaBitbucket, FaJira } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const initialExperiencesData: Experience[] = [
  {
    companyName: "Globussoft Technology",
    jobTitle: "Software Developer",
    dates: "October 2023 - Present",
    companyLogoUrl:
      "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751780588/glb_r1gdgk.webp",
    companyLogoAiHint: "tech company logo",
    descriptionPoints: [
      "Developing and maintaining web applications using Node.js and React.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export interface Skill {
  name: string;
  icon: ElementType;
}

export interface SkillCategory {
  title: string;
  icon: ElementType;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: MonitorPlay,
    skills: [
      { name: "HTML", icon: DiHtml5 },
      { name: "CSS", icon: DiCss3 },
      { name: "JavaScript", icon: DiJavascript1 },
      { name: "React", icon: DiReact },
      { name: "Redux", icon: SiRedux },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Chrome Extensions", icon: IoExtensionPuzzleOutline },
    ],
  },
  {
    title: "Backend Development",
    icon: ServerCog,
    skills: [
      { name: "Node.js", icon: DiNodejsSmall },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Webhook },
      { name: "Python", icon: DiPython },
    ],
  },
  {
    title: "Database Management",
    icon: DatabaseZap,
    skills: [
      { name: "MongoDB", icon: DiMongodb },
      { name: "MySQL", icon: DiMysql },
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "Elasticsearch", icon: SiElasticsearch },
      { name: "Redis", icon: DiRedis },
    ],
  },
  {
    title: "Cloud Computing",
    icon: CloudCog,
    skills: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Docker", icon: DiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "CI/CD", icon: Workflow },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: DiGit },
      { name: "GitHub", icon: Github },
      { name: "Bitbucket", icon: FaBitbucket },
      { name: "JIRA", icon: FaJira },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "WebStorm", icon: SiWebstorm },
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    skills: [
      { name: "OpenAI API", icon: SiOpenai },
      { name: "Google Gemini API", icon: Sparkles },
      { name: "LLM-based Feature Development", icon: BrainCircuit },
      { name: "Prompt Engineering", icon: Wand2 },
      { name: "GenAI Integration in Full-Stack Apps", icon: Webhook },
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: "CVSync: Smart Job Search Assistant",
    description:
      "CVSync simplifies job hunting by analyzing your resume and matching you with the best opportunities. Features AI-driven insights, smart job matching, and ATS optimization to enhance your resume and boost recruiter visibility.",
    imageUrl:
      "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751780591/cvsync_qt9fmk.webp",
    imageAiHint: "AI resume analysis",
    githubUrl: "https://github.com/chethans-dev/CVSync",
    liveUrl: "https://cvsync.onrender.com/",
    tags: [
      "Node.js",
      "Express.js",
      "React",
      "Gemini",
      "GenAI",
      "LLM",
      "Tailwind",
    ],
  },
  {
    title: "Shop Sphere E-commerce Platform",
    description:
      "A comprehensive e-commerce application designed to deliver a seamless and intuitive shopping experience. This project incorporates robust features and a scalable architecture for both customers and administrators.",
    imageUrl:
      "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751780591/shop-sphere_kjpoah.webp",
    imageAiHint: "online store ecommerce",
    githubUrl: "https://github.com/chethans-dev/Shop-Sphere",
    liveUrl: "https://shop-sphere-6hig.onrender.com/",
    tags: ["Node.js", "Express.js", "React", "MongoDB", "Tailwind"],
  },
  {
    title: "Natours: Tour Booking App",
    description:
      "A tour booking application built with Express.js, Node.js, and MongoDB. Natours transforms the way we experience nature through seamless technology and RESTful APIs.",
    imageUrl:
      "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751780592/natours_nha8w7.webp",
    imageAiHint: "travel booking app",
    githubUrl: "https://github.com/chethans-dev/Natours",
    liveUrl: "https://natours-f8h4.onrender.com/",
    tags: ["Node.js", "Express.js", "MongoDB", "CSS"],
  },
  {
    title: "ConvoHub: Real-Time Chat",
    description:
      "A real-time chat application built with the MERN stack and Socket.io. It offers seamless communication with instant messaging, elevating your networking experience.",
    imageUrl:
      "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751780587/convohub_vxbcol.webp",
    imageAiHint: "chat messaging app",
    githubUrl: "https://github.com/chethans-dev/ConvoHub",
    liveUrl: "https://convohub-aowu.onrender.com/",
    tags: ["React", "Express.js", "Node.js", "MongoDB"],
  },
  {
    title: "Climate Clues: Weather App",
    description:
      "An app providing up-to-the-minute weather information to empower you to make informed decisions. Built with a focus on accuracy, innovation, and user-friendliness.",
    imageUrl:
      "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751780587/climate_eint7l.webp",
    imageAiHint: "weather forecast app",
    githubUrl: "https://github.com/chethans-dev/Climate-Clues",
    liveUrl: "https://chethans-dev.github.io/Climate-Clues/",
    tags: ["HTML", "JavaScript", "CSS"],
  },
];

export interface Photography {
  src: string;
  title: string;
  description: string;
  height: number;
}

export const photographyData: Photography[] = [
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796195/1254140363_khqmu3.jpg",
    title: "Curious Puppy",
    description: "A young pup gazes thoughtfully off-camera.",
    height: 800,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796144/-1920330015_ia2cuq.jpg",
    title: "Dawn Over the Peaks",
    description: "Soft morning light crowns a jagged mountain ridge.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796149/167477192_ggtwzh.jpg",
    title: "Eyes of Wonder",
    description: "A close‑up portrait capturing a thoughtful gaze.",
    height: 800,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796189/1513796886_ovkksa.jpg",
    title: "Temple Serenity",
    description: "Sunlight filters through ancient stone arches.",
    height: 800,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796222/InShot_20220516_235652087_htxswa.jpg",
    title: "Golden Hour Glow",
    description: "Warm sunset hues spill across rolling hills.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796168/305586993_ebpn2l.jpg",
    title: "Urban Gathering",
    description: "A lively crowd mingles along a bustling street.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796164/1204252376_pgno2e.jpg",
    title: "Dragonfly Pause",
    description: "A dragonfly rests on a dewy leaf at dawn.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796164/791973521_hkk6c9.jpg",
    title: "Crimson Dusk",
    description: "A fiery sunset streaks the evening sky.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751799648/WhatsApp_Image_2025-07-06_at_4.27.08_PM_tngmn6.jpg",
    title: "Cozy Canine Slumber",
    description: "Two dogs snuggled up together in a peaceful sleep.",
    height: 800,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796162/726886503_e14qce.jpg",
    title: "Misty Lake",
    description: "Morning mist drifts across a tranquil lake.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796162/100509862_k2jdg1.jpg",
    title: "Street Performers",
    description: "Actors bring a city corner to life with their art.",
    height: 800,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796153/747825906_djjo4b.jpg",
    title: "Twilight Hues",
    description: "Daylight fades into a pastel sky at horizon’s edge.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796151/462044780_kyizgz.jpg",
    title: "Honeybee at Work",
    description: "A bee gathers pollen from a vibrant blossom.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796149/567038026_cwop5t.jpg",
    title: "Moonlit Tranquility",
    description: "The full moon casts silver light over quiet skies.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796149/104706041_c2siul.jpg",
    title: "Whispers of Clouds",
    description: "Soft billows drift across a clear blue expanse.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796146/-1200156783_a0ffff.jpg",
    title: "Bee in Bloom",
    description: "A honeybee hovers beside a sunflower bloom.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796146/-1738899258_jzua4v.jpg",
    title: "Elephants at Dawn",
    description: "A herd crosses misty grasslands in early light.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796146/54867210_s32567.jpg",
    title: "Starry Night",
    description: "A blanket of stars shines over a silent landscape.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796145/-1991185562_aod4dm.jpg",
    title: "Cotton Candy Clouds",
    description: "Pink‑tinged clouds float in the evening sky.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796144/-1698202854_pzqn06.jpg",
    title: "Morning Summit",
    description: "Golden sunrays usher in a new day on the peaks.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796145/-1725358107_vlhaso.jpg",
    title: "Sky’s Canvas",
    description: "Layered clouds create a dramatic sky portrait.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796141/-1585236264_gumxoy.jpg",
    title: "Rugged Heights",
    description: "Jagged mountain peaks framed by clear blue skies.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796140/-1496063911_wa2kdv.jpg",
    title: "Furry Friend",
    description: "A dog relaxes comfortably on a sunlit porch.",
    height: 800,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796137/-1101761465_iezzvr.jpg",
    title: "Sunset Rider",
    description: "A lone cyclist pedals against a fiery dusk sky.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796134/-386588432_yxoajg.jpg",
    title: "Tropical Shoreline",
    description: "Waves lap gently against a palm‑fringed beach.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796135/-304374523_apjjyz.jpg",
    title: "Sanctuary Pillars",
    description: "Ornate temple columns bathed in soft daylight.",
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/dyre5kz3t/image/upload/v1751796130/-237044065_qcz8bi.jpg",
    title: "Sunset Coast",
    description: "Crashing surf under a golden evening sky.",
    height: 600,
  },
];
