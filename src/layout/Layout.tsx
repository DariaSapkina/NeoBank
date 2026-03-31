import type { FC } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import type { ILayoutProps } from "./Layout.props";
import "./Layout.scss";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="page">
      <div className="page__background page__background_purple">
        <div className="page__layout">
          <Header />
          <main>{children}</main>
        </div>
      </div>
      <div className="page__background page__background_grey">
        <div className="page__layout">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export { Layout };
