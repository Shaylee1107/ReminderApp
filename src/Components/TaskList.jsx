import React, { useState } from 'react';

const TaskList = ({ listName }) => {
    const [tasks, setTasks] = useState([]);

    // const showTasks = () => {

    // }

    return (
        <div>
            <h1>{`${listName}`}</h1>
            <button>+ Add Task</button>
        </div>
    )
}

export default TaskList; 