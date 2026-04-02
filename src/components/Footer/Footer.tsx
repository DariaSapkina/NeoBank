import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import "./Footer.scss";

const Footer = () => {
  const listItems: Record<string, string>[] = [
    { title: "About bank", link: "#" },
    { title: "Ask a Question", link: "#" },
    { title: "Quality of service", link: "#" },
    { title: "Requisites", link: "#" },
    { title: "Press center", link: "#" },
    { title: "Bank career", link: "#" },
    { title: "Investors", link: "#" },
    { title: "Analytics", link: "#" },
    { title: "Business and processes", link: "#" },
    { title: "Compliance and business ethics", link: "#" },
  ];

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
          {listItems.map(({ title, link }) => (
            <li className="footer__listItem" key={title}>
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
