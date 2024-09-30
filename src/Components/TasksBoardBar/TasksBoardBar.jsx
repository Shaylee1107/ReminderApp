import React, { useState } from 'react';
import NewBoardForm from '../NewBoardForm';
import TasksBoard from '../TasksBoard/TasksBoard';
import styles from './TasksBoardBar.module.css';

const TasksBoardBar = () => {
    const [boards, setBoards] = useState([]);
    const [toggleForm, setToggleForm] = useState(false);

    const addNewBoard = (newBoardName) => {
        if(newBoardName!== undefined){
            setBoards([...boards, newBoardName]);
        }
    }

    const showBoardForm = () => {
        if(toggleForm){
            return (
                <>
                    <NewBoardForm addNewBoard={addNewBoard}/>
                </>
            )
        }
    }

    return (
        <div className={styles.tasksboardbar}>
            <div onClick={() => setToggleForm(value => !value)}>+ Add Board</div>
            {showBoardForm()}
            {
                boards.map((boardName, i) => {
                    return (
                        <TasksBoard boardName={boardName} key={i++}/>
                    )
                })
            }
        </div>
    )
}

export default TasksBoardBar;