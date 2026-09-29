export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Agriadventure",
    description:
      "An agricultural tourism web application that connects users with unique farming experiences and helps them learn more about food production and agriculture.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    image: "/projects/Agri_Adventure.png",
    github: "https://github.com/Ayoub-Haj-Husein/Agri_Adventure",
  },

{
  id: 2,
  title: "Developer Portfolio",
  description:
    "A responsive developer portfolio built with Next.js and TypeScript to showcase projects, technical skills, experience, and certifications.",
  technologies: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
  ],
  image: "/projects/portfolio.png",
  github: "https://github.com/Ayoub-Haj-Husein/Portfolio_",
  demo: "https://portfolio-eta-amber-23.vercel.app",
  },

  {
    id: 3,
    title: "Jordan Maritime Commission",
    description:
      "Contributed to a Maritime Services Management System during my training at Eqra Tech, working on the front end with React.js and the back end with Laravel and PHP.",
    technologies: [
      "React",
      "Laravel",
      "PHP",
    ],
  },
];