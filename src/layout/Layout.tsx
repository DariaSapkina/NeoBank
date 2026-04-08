import type { FC, ReactNode } from "react";
import { Header } from "@/components";
import { Footer } from "@/components";
import "./Layout.scss";

export interface ILayoutProps {
  children: ReactNode;
};

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__top">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
