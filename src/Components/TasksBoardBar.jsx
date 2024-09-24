import React, { useState } from 'react';
import NewBoardForm from './NewBoardForm';

const TasksBoardBar = () => {
    const [boards, setBoards] = useState();
    const [toggleForm, setToggleForm] = useState(false);

    const showBoardForm = () => {
        if(toggleForm === true){
            return (
                <>
                    <NewBoardForm />
                </>
            )
        }
    }

    return (
        <div>
            <button onClick={() => setToggleForm(value => !value)}>+ Add Board</button>
            {showBoardForm()}
        </div>
    )
}

export default TasksBoardBar;