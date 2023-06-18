import { useDispatch, useSelector } from "react-redux";
import Skill from "../../features/Skill/Skill";
import style from './Skills.module.css';
import { Button, TextField, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from "react";
import usePopUp from "../../hooks/usePopUp";
import Modal from "../../components/modal/Modal/Modal";
import { postSkillAction, fetchSkills, changeVisible } from "../../store/skillsReducer";
import { deleteSkillAction } from '../../store/skillsReducer'

function Skills() {
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills);
    const isVisible = skills.isVisible;
    const [modalVisible, setModalVisible, modalRef] = usePopUp();
    const [deleteModalVisible, setDeleteModalVisible, deleteModalRef] = usePopUp();
    const [name, setName] = useState("");
    const [deleteName, setDeleteName] = useState(""); 

    useEffect(() => {
        dispatch(fetchSkills())
    }, [dispatch])

    const onDelete = useCallback((name) => {
        let skill = skills.array.filter(skill => skill.name === name)
        if (skill.length > 0) {
            dispatch(deleteSkillAction(skill[0].id));
            setDeleteModalVisible(false);
            setDeleteName("");
        }
    }, [dispatch, skills, setDeleteModalVisible, setDeleteName])

    const showModal = useCallback(() => {
        setModalVisible(true);
    }, [setModalVisible])

    const showDeleteModal = useCallback(() => {
        setDeleteModalVisible(true);
    }, [setDeleteModalVisible])

    const updateNameOnChange = useCallback(e => {
        setName(prev => e.target.value)
    }, [setName])

    const createNewSkill = useCallback(() => {
        if (skills.array.filter(skill => skill.name === name).length === 0) {
            dispatch(postSkillAction(name));
            setName("");
            setModalVisible(false);
        }
    }, [setModalVisible, skills, setName, dispatch, name])

    return (
        <div className={style.container}>

            {
                skills.isLoading
                ?
                <Typography>Loading</Typography>
                :
                <>
                <Typography sx={{marginTop: "20px"}} variant="h5">Skills</Typography>
                {
                    isVisible
                    ?
                    <Button onClick={() => dispatch(changeVisible())}>Close</Button>
                    :
                    <Button onClick={() => dispatch(changeVisible())}>Open</Button>
                }

                <div className={`${style.skillsContainer} ${isVisible ? style.active : ''}`}>

                    {skills.array.map(skill => {
                        return (
                        <div key={skill.id} className={style.skillContainer}>
                            <Button onClick={showDeleteModal} styling={{"maxHeight": "40px"}}>Delete</Button>
                            <Skill {...skill}/>
                        </div>
                        )
                    })}
                
                </div>

                {
                    isVisible
                    ?
                    <Button size="large" sx={{marginTop: "0px", fontSize: "1.2rem"}} onClick={showModal}>Add</Button>
                    :
                    <></>

                }

                <Modal onSubmit={createNewSkill} modalRef={modalRef} isVisible={modalVisible}>
                    <h2>Create new skill</h2>
                    <input value={name} onChange={(e) => updateNameOnChange(e)} type="text" />
                    <Button onClick={createNewSkill}>Create</Button>
                </Modal>

                <Modal onSubmit={() => onDelete(deleteName)} modalRef={deleteModalRef} isVisible={deleteModalVisible}>
                    <Typography sx={{marginBottom: "50px"}} variant="h5">Are you sure you wanna delete your skill</Typography>
                    <TextField id="outlined-basic" onChange={e => {
                        setDeleteName(e.target.value);
                        }}
                    value={deleteName}
                    label="Spell name of the skill"
                    variant="outlined"
                    />
                </Modal>
                </>
            }
        </div>
    );
}

export default Skills;