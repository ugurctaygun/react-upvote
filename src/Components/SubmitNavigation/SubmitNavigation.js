import React from "react";

function SubmitButton() {
  return (
    <a href="/submit" className="c-submit-nav">
      <div className="c-submit-nav__box">+</div>
      <div className="c-submit-nav__text">Submit A Link</div>
    </a>
  );
}

export default SubmitButton;
