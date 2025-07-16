"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
// import { X } from 'lucide-react';

type ModalContextType = {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const showModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    // Delay clearing content to allow for fade-out animations
    setTimeout(() => setModalContent(null), 300);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center animate-fade-in"
          onClick={hideModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg m-4"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
          >
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
