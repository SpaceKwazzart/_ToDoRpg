import Bar from "../../shared/Bar/Bar";
import style from './Skill.module.css';

function Skill({ name, currentExp, currentMax, level }) {
    const percent = currentExp /  currentMax * 100

    return (
        <div className={style.skill}>
            <p>{name} Level {level}</p>
            <Bar percent={percent}>{`${currentExp}`}</Bar>
        </div>
    );
}

export default Skill;