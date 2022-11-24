import React from "react";
import ResoucesBanner from "./templates/banner";
import Footer from './../../components/footer';
import AppHeader from "./../../components/header";
import Lecture from './templates/lecture'

function Resources(props) {
  return (
    <div >
      <AppHeader />
      <ResoucesBanner />
      < Lecture/>
      < Footer/>
    </div>
  );
}

export default Resources;
