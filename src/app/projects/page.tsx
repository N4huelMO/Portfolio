import { projects } from "@/data/projects";

import Span from "@/components/Span";

import Card from "@/components/Card";

const Projects = () => {
  return (
    <div className="my-10 2xl:mt-16">
      <div className="text-3xl text-center xl:w-3/5 m-auto animate-fade-right">
        <p>
          Here you can see some projects that I developed
          <Span>.</Span> You can enter
          <Span>,</Span> try them and see with what technologies I worked
          <Span>.</Span>
        </p>
      </div>

      <div className="mt-12 grid justify-items-center md:grid-cols-2 2xl:grid-cols-4 gap-6 lg:gap-4 animate-fade-right">
        {projects.map((project, i) => (
          <Card key={i} project={project} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
