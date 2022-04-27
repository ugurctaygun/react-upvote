import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { updateState } from "../../Features/LinkSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubmitForm() {
  const links = useSelector((state) => state.links.value);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const linkName = event.target.name;
    const linkUrl = event.target.url;
    const linkObject = {
      id: Math.floor(Math.random() * 1000),
      name: linkName.value,
      url: linkUrl.value,
      votes: 0,
    };
    dispatch(
      updateState({
        ...links,
        linkList: [linkObject, ...links.linkList],
      })
    );
    toast.success(`${linkName.value} added.`, {
      className: "c-toast c-toast--success",
    });
  };

  return (
    <>
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
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <FontAwesomeIcon icon={faArrowLeft} /> Return to list
      </Link>
      <h2>Add a link</h2>
      <form className="c-form" onSubmit={handleSubmit}>
        <div className="c-form__section">
          <label>Link Name :</label>
          <input
            name="name"
            type="text"
            minLength={5}
            placeholder="e.g Google"
            required
          />
        </div>
        <div className="c-form__section">
          <label>Link Url :</label>
          <input
            name="url"
            type="url"
            minLength={5}
            placeholder="e.g https://www.google.com/"
            required
          />
        </div>
        <button className="c-form__button" type="submit">
          ADD
        </button>
      </form>
    </>
  );
}

export default SubmitForm;
