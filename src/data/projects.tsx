import reactMovies from "@/img/ReactMovies.png";
import pathfinding from "@/img/Pathfinding.png";
import pokedex from "@/img/Pokedex.png";
import toDo from "@/img/ToDo.png";

export const projects = [
  {
    img: reactMovies,
    name: "React Movies",
    alt: "react movies",
    description:
      "Website where you can see trends and upcoming news movies, series and anime. You can access each movie to see more information about it, like rating or duration.",
    tags: [
      "Vite",
      "Axios",
      "Tailwind",
      "Styled Components",
      "React Icons",
      "Swiper",
      "Twin Macro",
    ],
    portfolio: "https://github.com/N4huelMO/React-Movies",
    liveProject: "https://n4huelmo.github.io/React-Movies/",
  },
  {
    img: pathfinding,
    name: "Pathfinding Visualizer",
    alt: "pathfinding",
    description:
      "Project to find the shortest path between two nodes using the a* (A-star) algorithm, you can add or delete walls, generate random walls or generate a maze and clear the walls and path.",
    tags: ["Vite", "JavaScript", "CSS"],
    portfolio: "https://github.com/N4huelMO/PathfindingVisualizer",
    liveProject: "https://n4huelmo.github.io/PathfindingVisualizer/",
  },
  {
    img: pokedex,
    name: "Pokedex",
    alt: "pokedex",
    description:
      "You can find the all Pokémon in this page, filter by type and for each Pokémon, see the stats and evolutions of them, also you can search by number or by name of Pokémon.",
    tags: ["Next.js", "TypeScript", "SASS", "GraphQL", "Apollo Client"],
    portfolio: "https://github.com/N4huelMO/Pokedex",
    liveProject: "https://pokedex-n4huelmo.vercel.app/",
  },
  {
    img: toDo,
    name: "Better To-Do List",
    alt: "better to-do list",
    description:
      "The typical To-Do list but better because I developed one before but simpler, in this version you need login to access to create tasks, create lists and see the calendar, also you can change the theme.",
    tags: [
      "Next.js",
      "TypeScript",
      "Styled Components",
      "React Icons",
      "FullCalendar",
      "Firebase",
    ],
    portfolio: "https://github.com/N4huelMO/Better-To-Do-List",
    liveProject: "https://better-to-do-list-n4huelmo.vercel.app/",
  },
];
