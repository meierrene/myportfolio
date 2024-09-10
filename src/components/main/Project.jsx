import './Project.css';

const Project = props => {
  return (
    <button className={`project-icon ${!props.description ? 'postcard' : ''}`}>
      <div className={!props.description ? 'gallery-img' : ''}>
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
          <img
            src={`./img/${props.image}`}
            className={props.description && 'd-block w-100'}
            alt={props.name}
          />
        </a>
      </div>
      {props.description ? (
        <p className="myproject-description">{props.description}</p>
      ) : (
        <span className="gallery-title">{props.name}</span>
      )}
    </button>
  );
};

export default Project;
