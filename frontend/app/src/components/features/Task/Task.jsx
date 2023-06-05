import Button from '../../shared/Button/Button';
import style from './Task.module.css';

function Task({ onDelete, id, name, text }) {
    return (
        <div className={style.container}>
            <h3>{name}</h3>
            <p>{text}</p>
            <div className={style.innerContainer}>
                <Button onClick={() => onDelete(id)}>Delete</Button>
                <Button>Complete</Button>
            </div>
        </div>
    );
}

export default Task;