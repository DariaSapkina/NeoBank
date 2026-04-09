import type { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.scss";

export type TNavItem = {
  id: number;
  label: string;
  href: string;
};

interface IBurgerMenuProps {
  items: TNavItem[];
};

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
        className={`burgerMenu__list ${isOpen && "burgerMenu__list_open"}`}
      >
        {items.map(({ id, label, href }) => (
          <li className="burgerMenu__listItem" key={id}>
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
