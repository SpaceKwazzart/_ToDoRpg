import { useState } from "react";
import { Button } from '@mui/material';
import style from './Footer.module.css';
import usePopUp from "../../hooks/usePopUp";
import Modal from "../../components/modal/Modal/Modal";

function Footer() {
    const [isVisible, setIsVisible, feedbackRef] = usePopUp();
    const [modalType, setModalType] = useState("feedback");

    return (
        <>
        <footer className={style.container}>
            <Button onClick={() => setIsVisible(true)}>Feedback</Button>
        </footer>
        <Modal modalRef={feedbackRef} isVisible={isVisible} className={`${style.modal} ${isVisible ? style.activeModal : ""}`}>
            <div className={style.modalContainer}>
                <div>
                    <span className={`${modalType === "feedback" ? style.activeModal : ''}`}><Button onClick={() => setModalType("feedback")}>Фидбек</Button></span>
                    <span className={`${modalType === "tech" ? style.activeModal : ''}`}><Button onClick={() => setModalType("tech")}>Техподдержка</Button></span>
                </div>
                <textarea readonly cols="32" rows="32"></textarea>
                <Button>Send</Button>
            </div>
        </Modal>
        </>
    );
}

export default Footer;