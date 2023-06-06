import style from "./Button.module.css";

function Button({ styling, onClick, children }) {

    return (
        <button style={styling} onClick={onClick} className={style.button}>
            {children}
        </button>
    );
}

export default Button;