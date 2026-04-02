import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { AppRoutes, RoutePath } from "@/router/routeConfig";
//import { useState } from "react";
import { BurgerMenu, type TNavItem } from "../BurgerMenu/BurgerMenu";
import "./Header.scss";

const Header = () => {
  const links: TNavItem[] = [
    { label: "Credit card", href: "#" },
    { label: "Product", href: "#" },
    { label: "Account", href: "#" },
    { label: "Resources", href: "#" },
  ];

  return (
    <header className="header">
      <h1 className="header__title">
        <Link to={RoutePath[AppRoutes.HOME]}>NeoBank</Link>
      </h1>
      <nav className="header__navigation">
        <ul className="header__list">
          {links.map(({ label, href }) => (
            <li className="header__listItem" key={label}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header__burgerWrapper">
        <BurgerMenu items={links} />
      </div>
      <div className="header__button">
        <Button title="Online Bank" variant="rounded" />
      </div>
    </header>
  );
};

export { Header };
