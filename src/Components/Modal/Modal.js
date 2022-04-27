const Modal = ({ modalStatus, toggleModal, name, id, deleteLink }) => {
  if (modalStatus) {
    return (
      <>
        <div className="c-modal__overlay"></div>
        <div
          className={
            modalStatus
              ? `c-modal__content c-modal__content--slide`
              : `c-modal__content`
          }
        >
          <div className="c-modal__header">
            <p>Remove Link</p>
            <p style={{ cursor: "pointer" }} onClick={() => toggleModal()}>
              X
            </p>
          </div>
          <div className="c-modal__info">
            <p>Do you want to remove :</p>
            <h4>{name}</h4>
          </div>
          <div className="c-modal__buttons">
            <button onClick={() => deleteLink(name, id)}>OK</button>
            <button onClick={() => toggleModal()}>CANCEL</button>
          </div>
        </div>
      </>
    );
  }
};

export default Modal;
