import ProgressBar from "../ProgressBar/ProgressBar";
import style from './Skill.module.css';

function Skill({ name, currentExp, currentMax, level }) {
    const percent = Math.round(currentExp / currentMax * 100);

    return (
        <div draggable className={style.skill}>
            <p>{name} Level {level}</p>
            <ProgressBar value={percent}/>
        </div>
    );
}

export default Skill;