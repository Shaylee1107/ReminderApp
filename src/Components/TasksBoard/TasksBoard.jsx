import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import NewListForm from '../NewListForm';
import styles from './TasksBoard.module.css';

const TasksBoard = ({ boardName, activeBoard, showActiveBoard }) => {
    const [showListForm, setShowListForm] = useState(false);
    const [taskLists, setTaskLists] = useState([]);

    const popUpTaskLists = () => {
        if(activeBoard){
            return (
                <div style={{display: 'flex'}}>
                  {
                      taskLists.map((listName, i) => {
                          return (
                              <TaskList 
                                listName={listName} 
                                key={`${i}`} 
                              />
                          )
                      })
                  }   
                    <button onClick={() => setShowListForm(value => !value)}>+ Add List</button>
                    {popUpListForm()}
               </div>
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
          <div onClick={() => showActiveBoard(boardName)}>{`${boardName}`}</div>
          <div className={styles.listContainer}>
            {popUpTaskLists()}
          </div>
        </>
    )
}

export default TasksBoard;