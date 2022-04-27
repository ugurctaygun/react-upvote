import { useMemo, useState } from "react";
import LinkCard from "../Components/LinkCard/LinkCard";
import SubmitNavigation from "../Components/SubmitNavigation/SubmitNavigation";
import { removeLink, upvoteLink, downvoteLink } from "../Features/LinkSlice";
import { useSelector, useDispatch } from "react-redux";
import AnimatedPage from "../Components/AnimatedPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filter from "../Components/Filter/Filter";
import Pagination from "../Components/Pagination/Pagination";
import Modal from "../Components/Modal/Modal";

let PageSize = 3;

function Home() {
  const { linkList } = useSelector((state) => state.links.value);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [modalStatus, setModalStatus] = useState(false);
  const [linkItem, setLinkItem] = useState({});

  const currentLinkList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return linkList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, linkList]);

  const handleModal = (name, id) => {
    setModalStatus((modalStatus) => !modalStatus);
    setLinkItem({ name, id });
  };

  const handleDelete = (linkName, linkID) => {
    setModalStatus((modalStatus) => !modalStatus);
    toast.error(`${linkName} removed.`, {
      className: "c-toast c-toast--danger",
    });
    dispatch(removeLink(linkID));
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
      {linkList.length > 0 && (
        <div className="o-container__cards">
          <Filter />
          {currentLinkList.map((linkItem) => (
            <LinkCard
              key={linkItem.id}
              link={linkItem}
              delete={handleDelete}
              upvote={handleUpvote}
              downvote={handleDownvote}
              modal={handleModal}
            />
          ))}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={linkList.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          <Modal
            modalStatus={modalStatus}
            toggleModal={handleModal}
            deleteLink={handleDelete}
            name={linkItem.name}
            id={linkItem.id}
          />
        </div>
      )}
    </AnimatedPage>
  );
}

export default Home;
