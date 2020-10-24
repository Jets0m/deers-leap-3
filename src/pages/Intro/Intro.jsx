import React, { useEffect } from "react";
import "./Intro.scss";
import LogoDL from "../../images/logo-blue.svg"
import LogoI from "../../images/logo-insight.svg"
import DeerSVG from "../../components/deerSVG/DeerSVG";

export default function Intro() {
  return (
    <>
      <div className="site-intro">
          {window.innerWidth > 1200 ? <DeerSVG/> :null}
      </div>
      <div className="slider"></div>
    </>
  );
}
