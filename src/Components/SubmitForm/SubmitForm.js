import { useEffect, useState } from "react";
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
  const [preview, setPreview] = useState(null);
  const [urlInput, setUrlInput] = useState("");
  const [loading, setLoading] = useState(false);

  function isValidURL(string) {
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  }

  const handlePreview = (urlFromInput) => {
    let parsedUrl;
    fetch("https://upvote-case-backend.herokuapp.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: urlFromInput,
      }),
    }).then(function (res) {
      res.json().then(function (data) {
        if (data.url) {
          parsedUrl = data.url.substr(1);
        }
        setPreview(parsedUrl);
      });
    });
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (urlInput && isValidURL(urlInput)) {
        setLoading(true);
        handlePreview(urlInput);
        setLoading(false);
      }
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [urlInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const linkName = event.target.name;
    const linkUrl = event.target.url;
    const linkObject = {
      id: Math.floor(Math.random() * 1000),
      name: linkName.value,
      url: linkUrl.value,
      votes: 0,
      previewUrl: preview,
    };
    toast.success(`${linkName.value} added.`, {
      className: "c-toast c-toast--success",
    });
    dispatch(
      updateState({
        ...links,
        linkList: [linkObject, ...links.linkList],
      })
    );
    linkName.value = "";
    linkUrl.value = "";
    setPreview(null);
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
            onChange={(e) => setUrlInput(e.target.value)}
          />
        </div>
        {preview && (
          <div className="c-form__section c-form__preview">
            <h3>Link Preview</h3>
            <img
              src={`https://upvote-case-backend.herokuapp.com${preview}`}
              alt="preview"
            />
          </div>
        )}
        {!loading ? (
          <button className="c-form__button" type="submit">
            ADD
          </button>
        ) : (
          <button className="c-form__button" disabled>
            Loading Preview ...
          </button>
        )}
      </form>
    </>
  );
}

export default SubmitForm;
