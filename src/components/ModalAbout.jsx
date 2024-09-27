import { useEffect, useRef } from "react";
import Education from "./Education";
import Experience from "./Experience";
import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
import Skills from "./Skills";

function ModalAbout() {
  const { showAboutModal, setShowAboutModal, currentItemId } =
    useContext(ModalContext);
  const modalRef = useRef(null);

  const modalKeyDownClose = (event) => {
    if (event.key === "Escape") setShowAboutModal(!showAboutModal);
  };
  const modalMouseDownClose = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target))
      setShowAboutModal(!showAboutModal);
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
    <div className="modal modal-about" ref={modalRef}>
      <button onClick={() => setShowAboutModal(!showAboutModal)}>X</button>
      {currentItemId === "Education" && <Education />}
      {currentItemId === "Experience" && <Experience />}
      {currentItemId === "Skills" && <Skills />}
    </div>
  );
}

export default ModalAbout;
