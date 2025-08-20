import {
    SiFramer,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiPython,
    SiFastapi,
    SiOpenai,
    SiVercel
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Fullplate AI",
        description:
            "A service-based business specializing in implementing AI solutions for small and medium businesses. Helping SMBs leverage artificial intelligence to automate processes, improve efficiency, and drive growth.",
        technologies: [SiPython, SiFastapi, SiOpenai, SiReact, SiVercel],
        techNames: ["Python", "FastAPI", "OpenAI", "React", "Vercel"],
        techLinks: ["https://www.python.org/", "https://fastapi.tiangolo.com/", "https://openai.com/", "https://reactjs.org/", "https://vercel.com/"],
        github: "",
        demo: "https://fullplate.ai",
        image: "/fullplate-ai-hero.png",
        available: true,
    },
    {
        id: 1,
        name: "AI Garden",
        description:
            "An LLM aggregator platform that provides unified access to multiple large language models. Compare and interact with different AI models through a single, intuitive interface.",
        technologies: [SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiOpenai],
        techNames: ["React", "Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
        techLinks: ["https://reactjs.org/", "https://nextjs.org/", "https://www.typescriptlang.org/", "https://tailwindcss.com/", "https://openai.com/"],
        github: "",
        demo: "https://youraigarden.com",
        image: "/ai-garden.png",
        available: true,
    },
];
