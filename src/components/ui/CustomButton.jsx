import './CustomButton.css';

const CustomButton = props => {
  return <button className="custom-btn">{props.children}</button>;
};

export default CustomButton;
