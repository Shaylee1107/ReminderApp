import React from 'react';
import styles from './ListContainer.module.css';

const ListContainer = ({ popUpTaskLists }) => {
    return (
        <div className={styles.listContainer}>
            {popUpTaskLists()} 
        </div>
    )
}

export default ListContainer;