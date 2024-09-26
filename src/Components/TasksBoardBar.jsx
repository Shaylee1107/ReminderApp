import React, { useState, useEffect } from 'react';
import NewBoardForm from './NewBoardForm';
import TasksBoard from './TasksBoard';

const TasksBoardBar = () => {
    const [boards, setBoards] = useState([]);
    const [toggleForm, setToggleForm] = useState(false);

    const addNewBoard = (newBoardName) => {
        if(newBoardName!== undefined){
            setBoards([...boards, newBoardName]);
        }
    }

    useEffect(() => {
        console.log(boards, 'boards')
    }, [addNewBoard])

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
        <div>
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