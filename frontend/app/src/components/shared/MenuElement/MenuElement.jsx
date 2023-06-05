import style from './MenuElement.module.css';

function MenuElement({ onClick, children }) {
    return ( 
        <div onClick={onClick} className={style.element}>{children}</div>
    );
}

export default MenuElement;