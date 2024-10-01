import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import NewListForm from '../NewListForm';
import styles from './TasksBoard.module.css';
import ListContainer from '../ListContainer/ListContainer';

const TasksBoard = ({ boardName }) => {
    const [showLists, setShowLists] = useState(false);
    const [showListForm, setShowListForm] = useState(false);
    const [taskLists, setTaskLists] = useState([]);

    let listDisplay = showLists ? 'flex' : 'none';

    const popUpTaskLists = () => {
        return (
            <div style={{display: `${listDisplay}`}}>
              {
                  taskLists.map((listName, i) => {
                      return (
                          <TaskList 
                            listName={listName} 
                            key={`${i}`} 
                            showLists={showLists} 
                          />
                      )
                  })
              }   
           </div>
        )
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
          <div className={styles.listContainer}>
            {popUpTaskLists()}
            <button onClick={() => setShowListForm(value => !value)}>+ Add List</button>
            {popUpListForm()}
          </div>
          {/* <div>
            <ListContainer popUpTaskLists={popUpTaskLists}/>
          </div> */}
        </>
    )
}

export default TasksBoard;