import data from "../data.js";
import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";

function PortfolioList() {
  const { showModal, setShowModal, setCurrentItemId } =
    useContext(ModalContext);

  function handleModal(e) {
    setCurrentItemId(e.target.name);
    setShowModal(!showModal);
  }

  return (
    <ul className="portfolio-grid">
      {data.map((item) => (
        <li key={item.name} onClick={(e) => handleModal(e)}>
          <img
            className="img"
            name={item.name}
            src={item.image}
            alt={item.alt}
          />
        </li>
      ))}
    </ul>
  );
}

export default PortfolioList;
