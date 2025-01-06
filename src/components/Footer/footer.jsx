import Facebook from './facebook.svg';
import './footer.scss';
import Instagram from './instagram.svg';
import LogotypeFooter from './LogotypeFooter.svg';
import Whatsapp from './whatsapp.svg';
const Footer = () => {
  return (
    <div className="footer-div-main">
      <img src={LogotypeFooter} alt="" className="footer-logotype" />
      <div className="footer-div-text">
        <h4>Address</h4>
        <p>Svobody str. 35</p>
        <p>Kyiv</p>
        <p>Ukraine</p>
      </div>
      <div className="footer-contactUs">
        <h3>Contact us</h3>
        <div className='social-media-footer'>
          <img src={Instagram} alt="" />
          <img src={Facebook} alt="" />
          <img src={Whatsapp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
