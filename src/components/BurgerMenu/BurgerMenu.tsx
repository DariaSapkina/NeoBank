import type { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.scss";

export type TNavItem = {
  label: string;
  href: string;
};

export interface IBurgerMenuProps {
  items: TNavItem[];
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav className="burgerMenu">
      <button
        aria-label="Toggle menu"
        onClick={handleOpen}
        aria-expanded={isOpen}
        className="burgerMenu__button"
      >
        {isOpen ? "✕" : "☰"}
      </button>
      <ul
        className={`burgerMenu__list ${isOpen ? "burgerMenu__list_open" : ""}`}
      >
        {items.map(({ label, href }) => (
          <li className="burgerMenu__listItem" key={label}>
            <Link onClick={handleOpen} to={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { BurgerMenu };
