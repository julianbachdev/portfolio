import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import ModalAbout from "./components/ModalAbout";
import { ModalContext } from "./contexts/ModalContext";

function App() {
  const { showModal, showAboutModal } = useContext(ModalContext);

  return (
    <>
      <div className="home">
        <Header />
        <Main />
      </div>
      <Footer />
      {showModal && <Modal />}
      {showAboutModal && <ModalAbout />}
      {(showModal || showAboutModal) && <div className="overlay"></div>}
    </>
  );
}

export default App;
