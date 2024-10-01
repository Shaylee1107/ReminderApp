import React, { useState } from 'react';
import NewBoardForm from '../NewBoardForm';
import TasksBoard from '../TasksBoard/TasksBoard';
import styles from './TasksBoardBar.module.css';

const TasksBoardBar = () => {
    const [boards, setBoards] = useState([]);
    const [showBoardForm, setShowBoardForm] = useState(false);
    const [activeBoard, setActiveBoard] = useState('');

    let addBoardDisplay = showBoardForm ? 'none' : 'block';

    const showActiveBoard = (boardName) => {
        setActiveBoard(boardName);
    }

    const addNewBoard = (newBoardName) => {
        if(newBoardName!== undefined){
            setBoards([...boards, newBoardName]);
            setShowBoardForm(false);
            setActiveBoard(newBoardName);
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
                    if(activeBoard === boardName){
                        return (
                            <TasksBoard boardName={boardName} key={i} activeBoard={true} showActiveBoard={showActiveBoard}/>
                        )
                    } else {
                        return (
                            <TasksBoard boardName={boardName} key={i} activeBoard={false} showActiveBoard={showActiveBoard}/>
                        )
                    }
                })
            }
        </div>
    )
}

export default TasksBoardBar;