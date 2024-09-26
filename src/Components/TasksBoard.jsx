import React, { useState } from 'react';
import TaskList from './TaskList';
import NewListForm from './NewListForm';

const TasksBoard = ({ boardName }) => {
    const [showLists, setShowLists] = useState(false);
    const [showListForm, setShowListForm] = useState(false);
    const [taskLists, setTaskLists] = useState([]);

    const popUpTaskLists = () => {
        console.log(showLists, 'showLists')
     if(showLists){
        taskLists.map((listName) => {
            return (
                <TaskList listName={listName}/>
            )
        })
     }
    }

    const addNewList = (listName) => {
        if(taskLists !== undefined){
            setTaskLists([...taskLists, listName]);
        }
        console.log(taskLists, 'taskLists')
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