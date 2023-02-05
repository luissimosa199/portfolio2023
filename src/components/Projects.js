import data from "../db/data.json";
// import Carrousel from "./Carrousel";
import PurpleDivider from "./PurpleDivider";

function Projects() {
  const projects = data.projects;

  return (
    <div id="projects" className="section projects">
      <h2>Proyectos recientes</h2>
      {projects.map((e) => {
        return (
          <div className="projects-box" key={e.name}>
            <div className="projects-text">
              <h3>{e.name}</h3>
              <p>{e.description}</p>
            </div>
            <div className="projects-img">
              {/* <Carrousel imgData={e.imgSrc} /> */}
              <img src={e.imgSrc} alt={`${e.name} logo`} />
            </div>
            <div className="projects-tags">
              <ul>
                {e.tags.map((tag) => {
                  return <li key={tag}>{tag}</li>;
                })}
              </ul>
            </div>
            <div className="projects-links">
              <a href={e.codeLink}>Ir al código</a>
              <a href={e.liveLink}>Ir al sitio</a>
            </div>
          </div>
        );
      })}
      <div className="projects-divider">
        <PurpleDivider />
      </div>
    </div>
  );
}

export default Projects;
