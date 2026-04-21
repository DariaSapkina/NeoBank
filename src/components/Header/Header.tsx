import { Link, NavLink } from "react-router-dom";
import { Button, BurgerMenu, type TNavItem } from "@/components";
import { AppRoutes, RoutePath } from "@/router";
import "./Header.scss";

const Header = () => {
  const LINKS: TNavItem[] = [
    { id: 1, label: "Credit card", href: RoutePath[AppRoutes.LOAN] },
    { id: 2, label: "Product", href: "/product" },
    { id: 3, label: "Account", href: "/account" },
    { id: 4, label: "Resources", href: "/resorces" },
  ];

  return (
    <header className="header">
      <div className="header__title">
        <Link to={RoutePath[AppRoutes.HOME]}>NeoBank</Link>
      </div>
      <nav className="header__navigation">
        <ul className="header__list">
          {LINKS.map(({ id, label, href }) => (
            <li className="header__listItem" key={id}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  isActive ? "header__link header__link_active" : "header__link"
                }
              >
                {label}
              </NavLink>
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
