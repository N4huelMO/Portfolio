import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiSass,
  DiGit,
  DiNodejs,
} from "react-icons/di";

import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandGraphql,
} from "react-icons/tb";

import { SiTailwindcss, SiStyledcomponents, SiAxios } from "react-icons/si";

export const technologies = [
  { name: "JavaScript", icon: <DiJavascript /> },
  { name: "HTML", icon: <DiHtml5 /> },
  { name: "CSS", icon: <DiCss3 /> },
  { name: "SASS", icon: <DiSass /> },
  { name: "GIT", icon: <DiGit /> },
  { name: "Node JS", icon: <DiNodejs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Styled Components", icon: <SiStyledcomponents /> },
  { name: "NextJS", icon: <TbBrandNextjs /> },
  { name: "TypeScript", icon: <TbBrandTypescript /> },
  { name: "Axios", icon: <SiAxios /> },
  { name: "GraphQL", icon: <TbBrandGraphql /> },
];
