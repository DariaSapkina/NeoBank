import type { FC } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { ILayoutProps } from "./Layout.props";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
