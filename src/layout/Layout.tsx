import type { FC } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { ILayoutProps } from "./Layout.props";
import "./Layout.scss";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
