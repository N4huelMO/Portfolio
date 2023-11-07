import Span from "@/components/Span";
import { technologies } from "@/data/technologies";

const About = () => {
  return (
    <div className="my-10 2xl:mt-16 xl:w-4/5 m-auto">
      <div className="text-2xl animate-fade-right">
        <p className="mb-4">
          I<Span>&apos;</Span>m an autodidact web development
          <Span>,</Span> with strong desire to get started in this field to be
          able progress and enrich my knowledge
          <Span>,</Span> in addition I overcoming and facing the challenges that
          come with it
          <Span>.</Span>
        </p>

        <p>
          I really love learning new things about what I already know and what I
          don<Span>&apos;</Span>t know
          <Span>,</Span> to improve my coding skills
          <Span>.</Span>
        </p>
      </div>

      <div className="mt-8">
        <p className="text-3xl animate-fade-right animate-ease-out animate-delay-300">
          Technologies that I use<Span>:</Span>
        </p>

        <div className="mt-5 grid grid-cols-2 2xl:grid-cols-4	gap-2 animate-fade-right animate-ease-out animate-delay-500">
          {technologies.map((techno, i) => (
            <div
              key={i}
              className={`flex justify-between items-center p-2 bg-emerald-900/80 rounded-xl animate-fade-right animate-ease-out`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="pl-1 text-sm md:text-lg text-emerald-300">
                {techno.name}
              </p>
              <p className="text-6xl text-emerald-300">{techno.icon}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
