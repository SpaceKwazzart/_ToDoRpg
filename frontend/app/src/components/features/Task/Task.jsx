import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import Skill from '../../features/Skill/Skill';
import style from './Task.module.css';
import usePopUp from '../../../hooks/usePopUp';
import Modal from '../../modal/Modal/Modal';
import { useRef, useState } from 'react';
import { createAddexpAction } from '../../../store/userReducer';
import { createAddExpSkillTypeAction } from '../../../store/skillsReducer';
import { createRemoveTaskAction } from '../../../store/tasksReducer';

function Task({ onDelete, id, name, text }) {
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills);
    const [score, setScore] = useState(0);
    const [isVisible, setIsVisible, modalRef] = usePopUp();

    const onComplete = (taskId, skillId) => {
        const newScore = score / 60
        dispatch(createAddexpAction(newScore));
        dispatch(createAddExpSkillTypeAction({id: skillId, exp: newScore}));
        dispatch(createRemoveTaskAction(taskId))
        setScore("");
        setIsVisible(false);
    }

    return (
        <>
        <div className={style.container}>
            <h3>{name}</h3>
            <p>{text}</p>
            <div className={style.innerContainer}>
                <Button onClick={() => onDelete(id)}>Delete</Button>
                <Button onClick={() => setIsVisible(true)}>Complete</Button>
            </div>
        </div>
        
        <Modal isVisible={isVisible} modalRef={modalRef}>
            <h2>Minutes task has taken</h2>
            <div className={style.topContainer}>
            <Button onClick={() => setScore(prev => prev - 15)}>- 15 min</Button>
            <input className={style.scoreText} type="text" value={score} onChange={(e) => setScore(Number(e.target.value))}/>
            <Button onClick={() => setScore(prev => prev + 15)}>+ 15 min</Button>  
            </div>
            <div className={style.skillsContainer}>
                {
                skills.length > 0
                ?
                skills.map((skill, index) => {
                    return (
                        <div key={skill.id} className={style.buttonContainer}>
                        <Skill {...skill}/>
                        <Button onClick={() => onComplete(id, skill.id)}>Upgrade Skill</Button>
                        </div>
                    )
                })
                :
                <h3>You need to create at least 1 skill!</h3>
                }
            </div>
        </Modal>
        </>
    );
}

export default Task;