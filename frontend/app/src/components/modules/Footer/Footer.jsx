import { useEffect, useRef, useState } from "react";
import Button from "../../shared/Button/Button";
import style from './Footer.module.css';
import usePopUp from "../../../hooks/usePopUp";

function Footer() {
    const [isVisible, setIsVisible, feedbackRef] = usePopUp();
    const [modalType, setModalType] = useState("feedback");

    return (
        <>
        <div className={`${style.overlay} ${isVisible ? style.activeOverlay : ""}`}></div>
        <div ref={feedbackRef} className={`${style.modal} ${isVisible ? style.activeModal : ""}`}>
            <div className={style.modalContainer}>
                <div>
                    <span className={`${modalType === "feedback" ? style.activeModal : ''}`}><Button onClick={() => setModalType("feedback")}>Фидбек</Button></span>
                    <span className={`${modalType === "tech" ? style.activeModal : ''}`}><Button onClick={() => setModalType("tech")}>Техподдержка</Button></span>
                </div>
                <textarea cols="32" rows="32"></textarea>
                <Button>Send</Button>
            </div>
        </div>
        <div className={style.container}>
            <Button onClick={() => setIsVisible(true)}>Feedback</Button>
        </div>
        </>
    );
}

export default Footer;