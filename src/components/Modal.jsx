import { useEffect, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
import data from "../data";

function Modal() {
  const { showModal, setShowModal, currentItemId } = useContext(ModalContext);
  const modalRef = useRef(null);
  const item = data.find((item) => item.name === currentItemId);

  const modalKeyDownClose = (event) => {
    if (event.key === "Escape") setShowModal(!showModal);
  };
  const modalMouseDownClose = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target))
      setShowModal(!showModal);
  };

  useEffect(() => {
    document.addEventListener("mousedown", modalMouseDownClose);
    document.addEventListener("keydown", modalKeyDownClose);
    return () => {
      document.removeEventListener("mousedown", modalMouseDownClose);
      document.removeEventListener("keydown", modalKeyDownClose);
    };
  }, []);

  return (
    <div className="modal" ref={modalRef}>
      <button onClick={() => setShowModal(!showModal)}>X</button>
      <img className="modal-img" src={item.image} alt="" />

      <div>
        <a className="modal-icon" href={item.git} target="_blank">
          <img className="modal-icon" src="src/assets/github.png" />
        </a>
        <p>{item.description}</p>
        <a
          className="modal-link"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Full
          <br />
          Site
        </a>
      </div>
    </div>
  );
}

export default Modal;
