import React from "react";
import Header from "../screen/header";
import Footer from "../screen/footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
