import React from 'react';
import {ReactComponent as DeerImg} from '././../../images/deer.svg';
import "./DeerSVG.scss"

const DeerSVG = () => {
  return (
    <div className="svgBg">
      <DeerImg style={{height: "100vh", marginTop: "100px"}} id="eagle"/>
    </div>
  );
}
export default DeerSVG;