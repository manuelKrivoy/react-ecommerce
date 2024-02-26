import { Outlet } from "react-router-dom";
import NavbarContainer from "./navbar/NavbarContainer";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <NavbarContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
