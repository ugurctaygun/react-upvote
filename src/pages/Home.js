import React from "react";
import LinkCard from "../Components/LinkCard/LinkCard";
import SubmitNavigation from "../Components/SubmitNavigation/SubmitNavigation";
import { removeLink, upvoteLink, downvoteLink } from "../Features/LinkSlice";
import { useSelector, useDispatch } from "react-redux";
import AnimatedPage from "../Components/AnimatedPage";

function Home() {
  const { linkList } = useSelector((state) => state.links.value);
  const dispatch = useDispatch();

  const handleDelete = (linkToRemove) => {
    dispatch(removeLink(linkToRemove));
  };

  const handleUpvote = (linkToUpvote) => {
    dispatch(upvoteLink(linkToUpvote));
  };

  const handleDownvote = (linkToDownvote) => {
    dispatch(downvoteLink(linkToDownvote));
  };

  return (
    <AnimatedPage direction={"rtl"}>
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
    </AnimatedPage>
  );
}

export default Home;
