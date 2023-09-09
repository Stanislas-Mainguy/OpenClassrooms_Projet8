import React from "react";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import Footer from "../components/Organisms/Footer";

const ErrorPage = () => {
  return (
    <div id="global">
      <Header />
      <Main page="ErrorPage" />
      <Footer />
    </div>
  );
}

export default ErrorPage;