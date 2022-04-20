import React from "react";
import Header from "../components/content/Header";
import Tech from "../components/content/Tech";
import Experience from "../components/content/Experience";
// import Arti from "../components/content/Arti";
import BITDegree from "../components/content/BITDegree";
import SchoolEducation from "../components/content/SchoolEducation";
import UniEducation from "../components/content/UniEducation";
import Projects from "../components/content/Projects";
import ProfQual from "../components/content/ProfQual";
import Paintings from "../components/content/Paintings";
import Reference from "../components/content/Reference";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Tech />
      <Experience />
      {/* <Arti /> */}
      <BITDegree />
      <Projects />
      <SchoolEducation />
      <UniEducation />
      <ProfQual />
      <Paintings />
      <Reference />
    </div>
  );
};

export default Home;
