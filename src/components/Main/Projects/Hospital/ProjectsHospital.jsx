import Countrys from "./Countrys/Countrys";
import { PROJECT } from "../../../../data/PROJECT";
import "./ProjectsHospital.css";

const ProjectsHospital = () => {
  return (
    <>
      <div className="project-hospital-backgrounds header-backgrounds">
        <img
          className="main-background"
          src="https://i.ibb.co/JjLh64c/main-bg1.webp"
          alt="Background"
        />
        <a
          className="header-btn main-btn"
          href="https://www.flickr.com/photos/ivlualizeu/albums/72177720319087247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
      </div>
      <h2 className="projects-title hospital-title">Hospitality Projects</h2>
      <div className="projects-hospital-content">
        {PROJECT.map((project) => (
          <Countrys 
            key={project.id}
            title={project.title}
            link={project.link}
            text={project.text}
            img={project.img}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsHospital;
