import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import pinterestIcon from "../../assets/icons/pinterest.svg";
import "./footer.scss";

export function Footer() {
  return (
    <div className="footer">
      <nav className="footer_navigation">
        <ul>
          <li className="footer--listItems">&copy; 2025 LINEN LIFE</li>
          <li className="footer--listItems">Terms</li>
          <li className="footer--listItems">Sitemaps</li>
          <li className="footer--listItems">Privacy</li>
        </ul>
      </nav>
      <ul className="footer_iconList">
        <li className="footer--listItems">
          <img src={instagramIcon} alt="instagram" />
        </li>
        <li className="footer--listItems">
          <img src={facebookIcon} alt="facebook" />
        </li>
        <li className="footer--listItems">
          <img src={pinterestIcon} alt="pinterest" />
        </li>
      </ul>
    </div>
  );
}
