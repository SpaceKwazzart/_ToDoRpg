import style from './Modal.module.css';


function Modal({ isVisible, onSubmit, modalRef, children }) {

    const handleForm = (e) => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <>
        <form onSubmit={handleForm} ref={modalRef} className={`${style.modal} ${isVisible ? style.active : ''}`}>
            {children}
        </form>
        <div className={`${style.overlay} ${isVisible ? style.active : ''}`}>
        </div>
        </>
    );
}

export default Modal;