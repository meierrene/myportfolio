import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-copyright">
        Copyright &copy; {new Date().getFullYear()} by René Meier
      </p>
    </div>
  );
};

export default Footer;
