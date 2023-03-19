import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const modal = document.getElementById("modal");

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">{children}</div>,
        modal
    );
}
export { Modal };