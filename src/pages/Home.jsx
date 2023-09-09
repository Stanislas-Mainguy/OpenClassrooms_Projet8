import React from "react";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import Footer from "../components/Organisms/Footer";

const Home = () => {
  return (
    <div id="global">
      <Header />
      <Main page="HomePage" />
      <Footer />
    </div>
  );
}

export default Home;