import React, { useState } from 'react';
import TaskList from './TaskList';
import NewListForm from './NewListForm';

const TasksBoard = ({ name }) => {
    const [showTasks, setShowTasks] = useState(false);
    const [showListForm, setShowListForm] = useState(false);
    const [taskLists, setTaskLists] = useState([]);

    // const popUpTasks = () => {
    //  if(showTasks){
    //     taskLists.map((list) => {
    //         return (
    //             <TaskList list={list}/>
    //         )
    //     })
    //  }
    // }

    const popUpListForm = () => {
        if(showListForm){
            return (
                <NewListForm />
            )
        }
    }

    return (
        <>
          <div onClick={() => setShowTasks(value => !value)}>{`${name}`}</div>
          <button>+ Add List</button>
          {popUpListForm()}
          {/* {popUpTasks()} */}
        </>
    )
}

export default TasksBoard;