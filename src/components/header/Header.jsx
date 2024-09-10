import './Header.css';
import { sections } from '../utils/projectData';

const Header = () => {
  const initUrl = '#';
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark nav-container "
      id="home-btn"
    >
      <a className="menu-icons" href={initUrl}>
        Home
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {sections.map(s => {
            return (
              <li className="nav-item" key={s.title}>
                <a className="menu-icons" href={'#' + s.ref}>
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
