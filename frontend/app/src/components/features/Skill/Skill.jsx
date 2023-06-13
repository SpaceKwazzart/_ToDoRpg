import { Typography } from "@mui/material";
import ProgressBar from "../ProgressBar/ProgressBar";
import style from './Skill.module.css';

function Skill({ name, currentExp, currentMax, level }) {
    const percent = Math.round(currentExp / currentMax * 100);

    return (
        <>
        <div draggable className={style.skill}>
            <Typography>{name} <span className={style.levelLabel}> Level {level} </span></Typography>
            <ProgressBar level={level} value={percent}/>
        </div>
        </>
    );
}

export default Skill;