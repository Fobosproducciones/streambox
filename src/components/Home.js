import React from "react";
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import Wspbtn from "./Wspbtn";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainSection />
      <Wspbtn />
      <Footer />
    </>
  );
};

export default Home;
