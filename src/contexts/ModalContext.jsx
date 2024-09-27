import { createContext, useState } from "react";
import data from "../data";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(data[0].name);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        showAboutModal,
        setShowAboutModal,
        currentItemId,
        setCurrentItemId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
