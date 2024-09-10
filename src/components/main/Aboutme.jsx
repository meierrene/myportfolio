import './Aboutme.css';

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <h2 className="h2-title">About me</h2>
      <img
        className="personal-pic"
        src={'./img/profile.jpg'}
        alt="Portfolio Author"
      />
      <div className="story-telling">
        <p>
          <span role="img" aria-label="waving hand">
            👋
          </span>
          Hey!
        </p>
        <br />
        <p>
          I'm fullstack Dev and very excited for programming. My first contact
          with programming was when I studied Mechanical Engineering with
          <code>.c</code> language in 2008. After several years I've decided to
          go deeper for programming. Actually I'm searching for homework and
          freelance jobs to get even better.
        </p>
        <br />
        <p>Summarizing...</p>
        <br />
        <ul>
          <li>
            <span role="img" aria-label="seedling">
              🌱
            </span>
            I’m currently learning:&nbsp;
            <code>C#</code>, <code>React Native</code>, <code>MongoDB</code>;
          </li>
          <li>
            <span role="img" aria-label="framed picture">
              🖼️
            </span>
            And I have some frameworks skills like:&nbsp;
            <code>NodeJS</code>, <code>Express</code>, <code>React.JS</code>,{' '}
            <code>Next.JS</code>, <code>Unity</code> and so on...
          </li>
        </ul>
        <br />

        <p>
          <span role="img" aria-label="globe">
            🌍
          </span>
          Where to find me?
        </p>
        <div className="icons-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/meierrene"
          >
            <ion-icon class="icons" name="logo-github"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/renemeierdev/"
          >
            <ion-icon class="icons" name="logo-linkedin"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/renemeier.de/"
          >
            <ion-icon class="icons" name="logo-instagram"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://steamcommunity.com/profiles/76561198223067764/"
          >
            <ion-icon class="icons" name="logo-steam"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
