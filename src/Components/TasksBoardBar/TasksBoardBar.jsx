import React, { useState } from 'react';
import NewBoardForm from '../NewBoardForm';
import TasksBoard from '../TasksBoard/TasksBoard';
import styles from './TasksBoardBar.module.css';

const TasksBoardBar = () => {
    const [boards, setBoards] = useState([]);
    const [showBoardForm, setShowBoardForm] = useState(false);

    let addBoardDisplay = showBoardForm ? 'none' : 'block';

    const addNewBoard = (newBoardName) => {
        if(newBoardName!== undefined){
            setBoards([...boards, newBoardName]);
            setShowBoardForm(false);
        }
    }

    const popUpBoardForm = () => {
        if(showBoardForm){
            return (
                <>
                    <NewBoardForm addNewBoard={addNewBoard}/>
                </>
            )
        }
    }

    return (
        <div className={styles.tasksboardbar}>
            <div style={{display: addBoardDisplay}} onClick={() => setShowBoardForm(true)}>+ Add Board</div>
            {popUpBoardForm()}
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