import { useDispatch, useSelector } from 'react-redux';
import style from './Tasks.module.css'
import Task from '../../features/Task/Task';
import Modal from '../../components/modal/Modal/Modal';
import usePopUp from '../../hooks/usePopUp';
import { useEffect, useRef, useState } from 'react';
import { postTaskAction, fetchTasksAction } from '../../store/tasksReducer';
import { Button, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { deleteTodoAction } from '../../store/tasksReducer';

function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const isSkillsVisible = useSelector(state => state.skills.isVisible);
    const [newTask, setNewTask] = useState({name: "", text: "", order: 1, id: uuidv4()});
    const [isVisible, setIsVisible, modalRef] = usePopUp();

    useEffect( () => {
        dispatch(fetchTasksAction());
    }, [dispatch])

    const nameRef = useRef();
    const textRef = useRef();

    const onDelete = (id) => {
        dispatch(deleteTodoAction(id));
    }

    const onCommit = () => {
        if (newTask.name.length > 0) {
            console.log(newTask);
            dispatch(postTaskAction(newTask));
            setNewTask({name: '', text: '', order: 1, id: uuidv4()});
            textRef.current.value = '';
            nameRef.current.value = '';
            setIsVisible(false);
    }}

    return (
        <>
        <Typography sx={{marginTop: "0px"}} variant="h6">Todos</Typography>
        {
            tasks.isLoading
            ?
            <Typography>Loading...</Typography>
            :
            <div style={{maxHeight: `${isSkillsVisible ? "32vh" : "60vh"}`}} className={style.container}>
                {tasks.array.map(task => {
                    return <Task onDelete={onDelete} key={task.id} {...task}/>
                })}
                
                <Modal onSubmit={onCommit} isVisible={isVisible} setIsVisible={setIsVisible} modalRef={modalRef}>
                    <h2>Add new task</h2>
                    <div>
                        <h3>Title*</h3>
                        <input name='main-title' ref={nameRef} type="text" onChange={(e) => {
                            setNewTask({...newTask, name:e.target.value});
                            }} />
                    </div>
                    <div>
                        <h3>Comments</h3>
                        <input name='comment' type='text' ref={textRef} onChange={(e) => {
                            setNewTask({...newTask, text:e.target.value});
                        }}></input>
                    </div>
                    <div>
                    <Button onClick={() => setIsVisible(false)}>CANCEL</Button>
                    <Button onClick={onCommit}>COMMIT</Button>
                    <input style={{display: "none"}} id='sub' onSubmit={onCommit} type="submit"/> 
                    <label htmlFor="sub"/>
                    </div>
                </Modal>
            </div>
        }
        <Button onClick={() => setIsVisible(true)}>Add</Button>
        </>
    );
}

export default Tasks;