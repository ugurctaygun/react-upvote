import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SubmitNavigation() {
  return (
    <Link to="/submit" className="c-submit-nav">
      <div className="c-submit-nav__box">
        <FontAwesomeIcon icon={faPlus} size="3x" />
      </div>
      <div className="c-submit-nav__text">SUBMIT A LINK</div>
    </Link>
  );
}

export default SubmitNavigation;
