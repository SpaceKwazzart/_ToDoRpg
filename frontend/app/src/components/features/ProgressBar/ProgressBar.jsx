import { useState } from "react";
import Bar from "../../shared/Bar/Bar";
import style from './ProgressBar.module.css';
import { useSelector, useDispatch } from 'react-redux';

function ProgressBar() {
    const percent = useSelector(state => state.user.currentExp / state.user.currentMax * 100)
    const level = useSelector(state => state.user.level)

    const isDesktop = useSelector(state => state.media.isDesktop)

    return (
        <>
        {
            isDesktop
            ?
            <>
            <div className={style.container}>
            <Bar percent={percent}></Bar>
            <p className={style.percentText}>{percent}%</p>
            </div>
            <p className={style.level}>Level {level}</p>
            </>
            :
            <div className={style.container}>
            <Bar percent={percent}></Bar>
            <p className={style.percentText}>{percent}%</p>
            <p className={style.levelMobile}>Level {level}</p>
            </div>
        }
        </>
    );
}

export default ProgressBar;