import style from "./Button.module.css";

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className={style.button}>
            {children}
        </button>
    );
}

export default Button;