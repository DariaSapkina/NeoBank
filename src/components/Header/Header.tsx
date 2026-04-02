import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { AppRoutes, RoutePath } from "@/router/routeConfig";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to={RoutePath[AppRoutes.HOME]}>NeoBank</Link>
      </h1>
      <nav className="header__navigation">
        <ul className="header__list">
          <li className="header__listItem">
            <Link to="#">Credit card</Link>
          </li>
          <li className="header__listItem">
            <Link to="#">Product</Link>
          </li>
          <li className="header__listItem">
            <Link to="#">Account</Link>
          </li>
          <li className="header__listItem">
            <Link to="#">Resources</Link>
          </li>
        </ul>
      </nav>
      <div className="header__button">
        <Button title="Online Bank" variant="rounded" />
      </div>
    </header>
  );
};

export { Header };
