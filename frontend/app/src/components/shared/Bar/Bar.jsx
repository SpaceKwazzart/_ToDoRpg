import style from './Bar.module.css';

function Bar({ percent, children }) {
    return (
        <div className={`${style.barBg}`}>
            <div className={style.bar} style={ {"width": `${percent}%`} }>{children}</div>
        </div>
    );
}

export default Bar