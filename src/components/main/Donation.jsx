import './Donation.css';
import CustomButton from '../UI/CustomButton';

const Donation = () => {
  return (
    <div className="donation-container">
      <h2 className="h2-title">Did you like my projects? Please support me!</h2>

      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input
          type="hidden"
          name="hosted_button_id"
          value="64CQAVAJP9HKC"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />

        <CustomButton type="submit">
          Make me a donation!{' '}
          <img
            className="paypal-icon"
            src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
        </CustomButton>
      </form>
      <img
        className="rocket-icon"
        src={'./img/rocket.gif'}
        alt="rocket pixelart"
      />
    </div>
  );
};

export default Donation;
