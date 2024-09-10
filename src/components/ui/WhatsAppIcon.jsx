import './WhatsAppIcon.css';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5519984308466&text=Hey%21%20I%20found%20you%20in%20your%20portfolio."
      rel="noopener noreferrer"
      className="float"
      target="_blank"
    >
      <i className="fa fa-whatsapp my-float"></i>
    </a>
  );
};

export default WhatsAppIcon;
