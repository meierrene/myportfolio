import './MyProjects.css';
import Project from './Project';
import { highlightedProjects } from '../utils/projectData';

const Myprojects = () => {
  return (
    <div className="myprojects-container">
      <h2 className="h2-title">My highlighted projects</h2>

      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          className="myprojects-thumbnail carousel-inner"
          data-bs-interval="10"
        >
          {highlightedProjects.map((project, i) => {
            return (
              <div
                className={`carousel-item ${i === 0 && 'active'}`}
                key={project.name}
              >
                <Project
                  name={project.name}
                  link={project.link}
                  image={project.image}
                  description={project.description}
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Myprojects;
