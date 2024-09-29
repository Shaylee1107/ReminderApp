import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import Task from './Task';

const TaskList = ({ listName, showLists, tasks, setTasks }) => {
    const [showTaskForm, setShowTaskForm] = useState(false);

    const showTasks = () => {
        if(showLists){
            return (
                tasks.map((task, i) => {
                    return (
                        <Task taskName={task} key={i} />
                    )
                })
            )
        }
    }

    const addNewTask = (newTask) => {
        if(tasks !== undefined){
            setTasks([...tasks, newTask]);
        }
    }

    const popUpTaskForm = () => {
        if(showTaskForm){
            return (
                <NewTaskForm addNewTask={addNewTask}/>
            )
        }
    }

    return (
        <div>
            <h1>{`${listName}`}</h1>
            <button onClick={() => setShowTaskForm(value => !value)}>+ Add Task</button>
            {popUpTaskForm()}
            {showTasks()}
        </div>
    )
}

export default TaskList; 