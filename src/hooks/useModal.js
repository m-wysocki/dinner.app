import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    setModalOpen(!isModalOpen);
    const root = document.getElementById('root');
    root.classList.toggle('isModalOpen');
  }

  return {
    isModalOpen,
    toggleModal,
  };
};

export default useModal;
