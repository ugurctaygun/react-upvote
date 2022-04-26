import React from "react";

function LinkCard({ link }) {
  return (
    <article>
      <div>{link.name}</div>
      <div>{link.url}</div>
    </article>
  );
}

export default LinkCard;
