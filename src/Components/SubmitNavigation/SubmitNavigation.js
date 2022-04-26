import React from "react";
import PlusIcon from "../../Assets/svg/PlusIcon";

function SubmitButton() {
  return (
    <a href="/submit" className="c-submit-nav">
      <div className="c-submit-nav__box">
        <PlusIcon />
      </div>
      <div className="c-submit-nav__text">SUBMIT A LINK</div>
    </a>
  );
}

export default SubmitButton;
