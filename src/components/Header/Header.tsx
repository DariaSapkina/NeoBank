import { Link } from "react-router-dom";
import { Button, BurgerMenu, type TNavItem } from "@/components";
import { AppRoutes, RoutePath } from "@/router";
import "./Header.scss";

const LINKS: TNavItem[] = [
  { id: 1, label: "Credit card", href: "#" },
  { id: 2, label: "Product", href: "#" },
  { id: 3, label: "Account", href: "#" },
  { id: 4, label: "Resources", href: "#" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <Link to={RoutePath[AppRoutes.HOME]}>NeoBank</Link>
      </div>
      <nav className="header__navigation">
        <ul className="header__list">
          {LINKS.map(({ id, label, href }) => (
            <li className="header__listItem" key={id}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header__burgerWrapper">
        <BurgerMenu items={LINKS} />
      </div>
      <div className="header__button">
        <Button
          title="Online Bank"
          radius="medium"
          size="large"
          ariaLabel="Go to Online Bank"
        />
      </div>
    </header>
  );
};

export { Header };
