import React from "react";
import ResoucesBanner from "./templates/banner";
import Footer from './../../components/footer';
import AppHeader from "./../../components/header";
import Lectures from './templates/lectures';

function Resources(props) {
  return (
    <div style={{overflowX:'hidden'}}>
      <AppHeader />
      <ResoucesBanner />
      < Lectures/>
      {/* < Footer/> */}
    </div>
  );
}

export default Resources;
