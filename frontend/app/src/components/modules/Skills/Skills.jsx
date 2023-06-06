import { useDispatch, useSelector } from "react-redux";
import Skill from "../../features/Skill/Skill";
import style from './Skills.module.css';
import Button from "../../shared/Button/Button";
import { useCallback, useState } from "react";
import usePopUp from "../../../hooks/usePopUp";
import Modal from "../../modal/Modal/Modal";
import { createAddSkillAction, createDeleteSkillTypeAction } from "../../../store/skillsReducer";

function Skills() {
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills);
    const [isVisible, setIsVisible] = useState(false);
    const [modalVisible, setModalVisible, modalRef] = usePopUp();
    const [name, setName] = useState();

    const onDelete = useCallback((id) => {
        dispatch(createDeleteSkillTypeAction(id));
    })

    const showModal = useCallback(() => {
        setModalVisible(true);
    }, [])

    const updateNameOnChange = useCallback(e => {
        setName(prev => e.target.value)
    })

    const createNewSkill = useCallback(() => {
        dispatch(createAddSkillAction(name));
        setName("");
        setModalVisible(false);
    })

    return (
        <div className={style.container}>
            <Button onClick={() => setIsVisible(!isVisible)}>Skills</Button>
            <div className={`${style.skillsContainer} ${isVisible ? style.active : ''}`}>
            <Button styling={{marginTop: "35px"}} onClick={showModal}>Add</Button>
                {skills.map(skill => {
                    return (
                    <div className={style.skillContainer}>
                        <Button onClick={() => onDelete(skill.id)} styling={{"maxHeight": "40px"}}>Delete</Button>
                        <Skill key={skill.id} {...skill}/>
                    </div>
                    )
                })}
            </div>
            <Modal modalRef={modalRef} isVisible={modalVisible}>
                <h2>Create new skill</h2>
                <input value={name} onChange={updateNameOnChange} type="text" />
                <Button onClick={createNewSkill}>Create</Button>
            </Modal>
        </div>
    );
}

export default Skills;