import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';

import Skill from '../Skill/Skill';
import usePopUp from '../../hooks/usePopUp';
import Modal from '../../components/modal/Modal/Modal';

import { completeTaskAction } from '../../store/skillsReducer';

import style from './Task.module.css';

function Task({ onDelete, id, name, text }) {
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills);
    const [score, setScore] = useState(0);
    const [isVisible, setIsVisible, modalRef] = usePopUp();

    const onComplete = (taskId, skillId) => {
        const newScore = score / 60
        dispatch(completeTaskAction({ taskId: taskId, skillId: skillId, newExpirience: newScore }));
        setScore(0);
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
                skills.array.length > 0
                ?
                skills.array.map((skill, index) => {
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