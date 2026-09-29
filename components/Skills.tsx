const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
                <span 
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-gray-300"
                >
                    {skill}
                </span>
            ))}
        </div>
      </div>
    </section>
  );
}