import React from "react";
import { updateState } from "../../Features/LinkSlice";
import { useSelector, useDispatch } from "react-redux";

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
        linkList: [...links.linkList, linkObject],
      })
    );
  };

  return (
    <>
      <div>return to list</div>
      <h2>Add a link</h2>
      <form className="c-form" onSubmit={handleSubmit}>
        <div className="c-form__section">
          <label>Link Name</label>
          <input name="name" type="text" placeholder="e.g testo" />
        </div>
        <div className="c-form__section">
          <label>Link Url</label>
          <input name="url" type="text" placeholder="e.g testo" />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default SubmitForm;
