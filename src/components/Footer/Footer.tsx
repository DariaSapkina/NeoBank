import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import "./Footer.scss";

const LIST_ITEMS = [
  { id: 1, title: "About bank", link: "#" },
  { id: 2, title: "Ask a Question", link: "#" },
  { id: 3, title: "Quality of service", link: "#" },
  { id: 4, title: "Requisites", link: "#" },
  { id: 5, title: "Press center", link: "#" },
  { id: 6, title: "Bank career", link: "#" },
  { id: 7, title: "Investors", link: "#" },
  { id: 8, title: "Analytics", link: "#" },
  { id: 9, title: "Business and processes", link: "#" },
  { id: 10, title: "Compliance and business ethics", link: "#" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Link to="https://www.neoflex.ru/" className="footer__logo">
          <img src={logo} alt="Neoflex home page" />
        </Link>

        <address className="footer__contacts">
          <a
            className="footer__phone"
            href="tel:+74959842513"
            aria-label="Call NeoBank"
          >
            +7 (495) 984 25 13
          </a>
          <a
            className="footer__email"
            href="mailto:info@neoflex.ru"
            aria-label="Email NeoBank"
          >
            info@neoflex.ru
          </a>
        </address>
      </div>
      <nav className="footer__navigation" aria-label="Footer navigation">
        <ul className="footer__list">
          {LIST_ITEMS.map(({ id, title, link }) => (
            <li className="footer__listItem" key={id}>
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <small className="footer__legal">
        We use cookies to personalize our services and improve the user
        experience of our website. Cookies are small files containing
        information about previous visits to a website. If you do not want to
        use cookies, please change your browser settings
      </small>
    </footer>
  );
};

export { Footer };
