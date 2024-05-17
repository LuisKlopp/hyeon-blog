"use client";

import { useCallback, useState } from "react";

const useModal = () => {
  const [isModal, setIsModal] =
    useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModal(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsModal((isOpen) => !isOpen);
  }, []);

  return {
    isModal,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useModal;
