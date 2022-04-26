import React from "react";
import PlusIcon from "../../Assets/svg/PlusIcon";
import { Link } from "react-router-dom";

function SubmitButton() {
  return (
    <Link to="/submit" className="c-submit-nav">
      <div className="c-submit-nav__box">
        <PlusIcon />
      </div>
      <div className="c-submit-nav__text">SUBMIT A LINK</div>
    </Link>
  );
}

export default SubmitButton;
