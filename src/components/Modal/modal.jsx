import React, { useState } from "react";
import "./modal.scss";


const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="modal-container">
      <button className="SignUp-btn" onClick={openModal}>
        Sign Up
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <div>
                <h2>Sign Up</h2>
                <p>Username</p>
                    <input type="text"  placeholder="Username"/>
                <p>E-Mail</p>
                    <input type="text"  placeholder="E-Mail"/>
                <p>Password</p>
                    <input type="text"  placeholder="Password"/>
            </div>
                <button className="SignUp-btn">Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
