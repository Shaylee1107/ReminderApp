import React from 'react';

const TaskList = ({ listName }) => {
    return (
        <div>
            <h1>{`${listName}`}</h1>
            <button>+ Add Task</button>
        </div>
    )
}

export default TaskList; 