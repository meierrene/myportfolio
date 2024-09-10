import './Greetings.css';

const Greetings = () => {
  return (
    <div className="greetings-container">
      <h1 className="h1-title">Welcome to my Portfolio!</h1>
      <img
        className="personal-icon"
        src={'./img/home-skin.gif'}
        alt="Dev programming pixelart"
      />
      <h2 className="h2-title">I'm René Meier - Web-developer</h2>
    </div>
  );
};

export default Greetings;
