import style from "./Button.module.css";

function Button({ onClick, children }) {
    return (
        <button style={{}} onClick={onClick} className={style.button}>
            {children}
        </button>
    );
}

export default Button;