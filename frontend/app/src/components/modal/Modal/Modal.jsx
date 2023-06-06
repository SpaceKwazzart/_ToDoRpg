import { useDispatch } from "react-redux";
import usePopUp from "../../../hooks/usePopUp";
import style from './Modal.module.css';


function Modal({ isVisible, setIsVisible, modalRef, children }) {

    return (
        <>
        <div ref={modalRef} className={`${style.modal} ${isVisible ? style.active : ''}`}>
            {children}
        </div>
        <div className={`${style.overlay} ${isVisible ? style.active : ''}`}>
        </div>
        </>
    );
}

export default Modal;