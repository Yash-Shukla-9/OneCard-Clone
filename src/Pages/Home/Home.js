import React, { useState } from "react";
import Header from "../../Components/Header-nav/Header";
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section1/Section2";
import Section3 from "../../Components/Section1/Section3";
import Section4 from "../../Components/Section1/Section4";
import Section5 from "../../Components/Section1/Section5";
import Section6 from "../../Components/Section1/Section6";
import Section7 from "../../Components/Section1/Section7";
import Section8 from "../../Components/Section1/Section8";
import Section9 from "../../Components/Section1/Section9";
import Section10 from "../../Components/Section1/Section10";
import Section11 from "../../Components/Section1/Section11";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="Home-div">
      <Header />

      <Section1 />

      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Footer />
    </div>
  );
}

export default Home;
