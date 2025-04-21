import React, { useState } from 'react';

const RegisterButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="font-cyber text-base uppercase tracking-wider bg-gray-600 cursor-not-allowed px-6 py-3 mt-4 text-center rounded clip-slant hover:shadow-none transition-all duration-300"
      >
        Registration Closed
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal} // Close modal when clicking outside the modal content
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-sm text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-xl font-semibold mb-4">Registrations Closed</h2>
            <p className="mb-6">Registrations are closed for SentinelHack 5.0.</p>
            <button
              onClick={closeModal}
              className="font-cyber text-base uppercase tracking-wider bg-cyber-red px-6 py-2 rounded clip-slant hover:shadow-neon-red transition-all duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterButton;