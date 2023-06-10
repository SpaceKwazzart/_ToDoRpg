import { useDispatch, useSelector } from "react-redux";
import Skill from "../../features/Skill/Skill";
import style from './Skills.module.css';
import { Button } from '@mui/material';
import { useCallback, useState } from "react";
import usePopUp from "../../../hooks/usePopUp";
import Modal from "../../modal/Modal/Modal";
import { addSkill, deleteSkill } from "../../../store/skillsReducer";

function Skills() {
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills);
    const [isVisible, setIsVisible] = useState(false);
    const [modalVisible, setModalVisible, modalRef] = usePopUp();
    const [name, setName] = useState();

    const onDelete = useCallback((id) => {
        console.log("tring to delete");
        dispatch(deleteSkill(id));
    }, [dispatch])

    const showModal = useCallback(() => {
        setModalVisible(true);
    }, [setModalVisible])

    const updateNameOnChange = useCallback(e => {
        setName(prev => e.target.value)
    }, [setName])

    const createNewSkill = useCallback(() => {
        dispatch(addSkill(name));
        setName("");
        setModalVisible(false);
    }, [setModalVisible, setName, dispatch, name])

    return (
        <div className={style.container}>
            {
                isVisible
                ?
                <Button onClick={() => setIsVisible(!isVisible)}>Close</Button>
                :
                <Button onClick={() => setIsVisible(!isVisible)}>Skills</Button>
            }

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

            <Modal onSubmit={createNewSkill} modalRef={modalRef} isVisible={modalVisible}>
                <h2>Create new skill</h2>
                <input value={name} onChange={updateNameOnChange} type="text" />
                <Button onClick={createNewSkill}>Create</Button>
            </Modal>
        </div>
    );
}

export default Skills;