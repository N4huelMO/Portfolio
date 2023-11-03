import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const linkClassName =
  "p-2 flex gap-2 justify-center items-center bg-neutral-800 hover:bg-emerald-900 transition-all rounded-md text-neutral-500 hover:text-white w-full text-center";

interface Props {
  project: Project;
  index: number;
}

interface Project {
  img: StaticImageData;
  name: string;
  alt: string;
  description: string;
  tags: string[];
  portfolio: string;
  liveProject: string;
}

const Card = ({ project, index }: Props) => {
  return (
    <div
      style={{ animationDelay: `${index * 100}ms` }}
      className="max-w-md max-h-min bg-neutral-900/80 rounded-lg border-2 border-neutral-700/70 group hover:border-emerald-600/80 transition-all duration-300 flex flex-col animate-fade-right hover:shadow-lg hover:shadow-emerald-900/70"
    >
      <div className="overflow-hidden rounded-t-md">
        <Image
          priority
          src={project.img}
          alt={project.alt}
          className="group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-2xl text-neutral-500 group-hover:text-emerald-400 transition-all duration-300">
          {project.name}
        </p>

        <p className="my-5">{project.description}</p>

        <div className="flex gap-1 flex-wrap mb-10">
          {project.tags.map((tag: string, i: number) => (
            <p
              key={i}
              className="whitespace-nowrap w-min py-[1px] px-2 rounded-lg bg-neutral-800 text-neutral-500 group-hover:bg-emerald-900/50 group-hover:text-emerald-400/70 transition-all duration-300"
            >
              {tag}
            </p>
          ))}
        </div>

        <div className="flex gap-x-4 w-full mt-auto">
          <Link
            href={project.portfolio}
            target="_blank"
            className={linkClassName}
          >
            Repository <BsGithub />
          </Link>
          <Link
            href={project.liveProject}
            target="_blank"
            className={linkClassName}
          >
            Live Project <TbWorld />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
