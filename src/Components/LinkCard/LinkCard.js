import React from "react";

const LinkCard = ({ ...props }) => {
  return (
    <article>
      <div>{props.link.votes}</div>
      <div>{props.link.name}</div>
      <div>{props.link.url}</div>
      <div onClick={() => props.delete(props.link.id)}>delete link</div>
      <div onClick={() => props.upvote(props.link.id)}>upvote</div>
      <div onClick={() => props.downvote(props.link.id)}>downvote</div>
      <div></div>
    </article>
  );
};

export default LinkCard;
