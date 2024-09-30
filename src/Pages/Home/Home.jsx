import React from 'react';
import TasksBoardBar from '../../Components/TasksBoardBar/TasksBoardBar';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            this is home..........
            <TasksBoardBar />
        </div>
    )
}

export default Home; 