import { Bottom } from "./style";
import FooterLogo from "../../assets/img/footerLogo.png";
import Facebook from "../../assets/icons/ic-facebook.svg";
import Twitter from "../../assets/icons/ic-twitter.svg";
import Instagram from "../../assets/icons/ic-instagram.svg";
import Pintrest from "../../assets/icons/ic-pinterset.svg";

const Footer = () => {
  return (
    <Bottom>
      <Bottom.Socials>
        <Bottom.Logo>
          <img src={FooterLogo} alt="logo" width={32} height={39} />
          <Bottom.Heading>Furniking</Bottom.Heading>
        </Bottom.Logo>
        <Bottom.Text>
          Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
        </Bottom.Text>
        <Bottom.Media>
          <img src={Facebook} alt="Facebook icon" width={8} height={16} />
          <img src={Twitter} alt="Facebook icon" width={16} height={13} />
          <img src={Instagram} alt="Facebook icon" width={16} height={16} />
          <img src={Pintrest} alt="Facebook icon" width={13} height={16} />
        </Bottom.Media>
      </Bottom.Socials>
    </Bottom>
  );
};

export default Footer;
