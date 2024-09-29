import React, { useState } from 'react';
import TaskList from './TaskList';
import NewListForm from './NewListForm';

const TasksBoard = ({ boardName }) => {
    const [showLists, setShowLists] = useState(false);
    const [showListForm, setShowListForm] = useState(false);
    const [taskLists, setTaskLists] = useState([]);
    const [tasks, setTasks] = useState([]);

    const popUpTaskLists = () => {
     if(showLists){
        return (
            taskLists.map((listName, i) => {
                return (
                    <TaskList 
                      listName={listName} 
                      key={`${i}`} 
                      showLists={showLists} 
                      tasks={tasks} 
                      setTasks={setTasks}
                    />
                )
            })
        )
     }
    }

    const addNewList = (listName) => {
        if(taskLists !== undefined){
            setTaskLists([...taskLists, listName]);
        }
    }

    const popUpListForm = () => {
        if(showListForm){
            return (
                <NewListForm addNewList={addNewList}/>
            )
        }
    }

    return (
        <>
          <div onClick={() => setShowLists(value => !value)}>{`${boardName}`}</div>
          <button onClick={() => setShowListForm(value => !value)}>+ Add List</button>
          {popUpListForm()}
          {popUpTaskLists()}
        </>
    )
}

export default TasksBoard;