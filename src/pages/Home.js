import React from "react";
import LinkCard from "../Components/LinkCard/LinkCard";
import SubmitNavigation from "../Components/SubmitNavigation/SubmitNavigation";
import { removeLink, upvoteLink, downvoteLink } from "../Features/LinkSlice";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const { linkList } = useSelector((state) => state.links.value);
  const dispatch = useDispatch();

  const handleDelete = (linkToBeRemoved) => {
    dispatch(removeLink(linkToBeRemoved));
  };

  const handleUpvote = (linkToUpvote) => {
    dispatch(upvoteLink(linkToUpvote));
  };

  const handleDownvote = (linkToDownvote) => {
    dispatch(downvoteLink(linkToDownvote));
  };

  return (
    <section className="o-container">
      <SubmitNavigation />
      <div className="o-container__cards">
        {linkList.map((linkItem) => (
          <LinkCard
            key={linkItem.name}
            link={linkItem}
            delete={handleDelete}
            upvote={handleUpvote}
            downvote={handleDownvote}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
