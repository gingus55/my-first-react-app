import "./App.css";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";

const projectsFromApi = [
  {
    title: "Project 1",
    description: "this is one",
  },
  {
    title: "Project 2",
    description: "this is one",
  },
  {
    title: "Project 3",
    description: "this is one",
  },
  {
    title: "Project 4",
    description: "this is one",
  },
];
// Step 1 - declare component as a function
const App = (props) => {
  // React components always have to return JSX (HTML)

  return (
    <>
      <Header title="Chris Bradshaw" subtitle="Full Stack Developer" />
      <main>
        <h3 className="title">My Projects</h3>
        <div className="projects">
          {projectsFromApi.map((project) => {
            return <ProjectCard {...project} />;
          })}
        </div>
      </main>
    </>
  );
};

// Step 2 - export your component
export default App;
