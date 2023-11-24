import React from "react";
import medalImg from "../assets/medal.png";
import { Link } from "react-router-dom";
import "../styles/Medal.css";

const Medal = ({ sportID }) => {
  const routeName = `/sport_detail/${sportID}`;
  const altText = `medal-${sportID}`;

  return (
    <Link to={routeName} className="medal">
      <div className="medal-image">
        <img src={medalImg} alt={altText} />
      </div>
    </Link>
  );
};

export default Medal;
