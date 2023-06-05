import { useSelector } from "react-redux";
import Skill from "../../features/Skill/Skill";
import style from './Skills.module.css';
import Button from "../../shared/Button/Button";
import { useState } from "react";

function Skills() {
    const skills = useSelector(state => state.skills);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={style.container}>
            <h1>ToDo</h1>
            <Button onClick={() => setIsVisible(!isVisible)}>Skills</Button>
            <div className={`${style.skillsContainer} ${isVisible ? style.active : ''}`}>
                {skills.map(skill => {
                    return <Skill key={skill.id} {...skill}/>
                })}
            </div>
        </div>
    );
}

export default Skills;