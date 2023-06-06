import { useDispatch, useSelector } from 'react-redux';
import style from './Tasks.module.css'
import Task from '../../features/Task/Task';
import Button from '../../shared/Button/Button';
import Modal from '../../modal/Modal/Modal';
import usePopUp from '../../../hooks/usePopUp';
import { useRef, useState } from 'react';
import { createAddTaskAction, createRemoveTaskAction } from '../../../store/tasksReducer';
import { createAddexpAction } from '../../../store/userReducer';
import { createAddExpSkillTypeAction } from '../../../store/skillsReducer';

function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const [newTask, setNewTask] = useState({name: "", text: "", order: 1, id: 9999});
    const [isVisible, setIsVisible, modalRef] = usePopUp();

    const nameRef = useRef();
    const textRef = useRef();

    const onDelete = (id) => {
        dispatch(createRemoveTaskAction(id));
    }

    return (
        <>
        <div className={style.container}>
            {tasks.map(task => {
                return <Task onDelete={onDelete} key={task.id} {...task}/>
            })}
            <Button onClick={() => setIsVisible(true)}>Add</Button>
            <Modal isVisible={isVisible} setIsVisible={setIsVisible} modalRef={modalRef}>
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
                <Button onClick={() => {
                    if (newTask.name.length > 0) {
                        dispatch(createAddTaskAction(newTask))
                        setNewTask({name: '', text: '', order: 1, id: newTask.id + 1});
                        textRef.current.value = '';
                        nameRef.current.value = '';
                        setIsVisible(false);
                    }
                }}>COMMIT</Button>
                </div>
            </Modal>
          </div>
        </>
    );
}

export default Tasks;