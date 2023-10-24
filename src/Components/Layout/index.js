import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
