import Image from "next/image";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10">
      
      {project.image && (
        <div className="relative h-52 w-full">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {(project.demo || project.github) && (
          <div className="mt-8 flex gap-4">
            
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-white px-4 py-2 font-medium text-black transition hover:bg-gray-200"
              >
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/20 px-4 py-2 font-medium transition hover:bg-white/10"
              >
                GitHub
              </a>
            )}

          </div>
        )}
      </div>
    </article>
  );
}