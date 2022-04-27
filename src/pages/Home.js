import React from "react";
import LinkCard from "../Components/LinkCard/LinkCard";
import SubmitNavigation from "../Components/SubmitNavigation/SubmitNavigation";
import { removeLink, upvoteLink, downvoteLink } from "../Features/LinkSlice";
import { useSelector, useDispatch } from "react-redux";
import AnimatedPage from "../Components/AnimatedPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filter from "../Components/Filter/Filter";

function Home() {
  const { linkList } = useSelector((state) => state.links.value);
  const dispatch = useDispatch();

  const handleDelete = (linkToRemove) => {
    dispatch(removeLink(linkToRemove.id));
    toast.error(`${linkToRemove.name} removed.`, {
      className: "c-toast c-toast--danger",
    });
  };

  const handleUpvote = (linkToUpvote) => {
    dispatch(upvoteLink(linkToUpvote));
  };

  const handleDownvote = (linkToDownvote) => {
    dispatch(downvoteLink(linkToDownvote));
  };

  return (
    <AnimatedPage direction={"rtl"}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SubmitNavigation />
      <div className="o-container__cards">
        <Filter />
        {linkList.map((linkItem) => (
          <LinkCard
            key={linkItem.id}
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
