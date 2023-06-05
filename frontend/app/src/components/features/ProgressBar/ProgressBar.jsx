import { useState } from "react";
import Bar from "../../shared/Bar/Bar";
import style from './ProgressBar.module.css';
import { useSelector, useDispatch } from 'react-redux';

function ProgressBar() {
    const percent = useSelector(state => state.user.currentExp / state.user.currentMax * 100)

    return (
        <div className={style.container}>
        <Bar percent={percent}></Bar>
        <p>{percent}%</p>
        </div>
    );
}

export default ProgressBar;