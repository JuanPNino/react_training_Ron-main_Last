import React from 'react';
import Dashboard from '../Pages/Dashboard';
import styles from './apiOutputList.module.css';

const apiOutputList = (props) => {

    let displayDetails = null;

    if (props.apiError) {
        displayDetails = (
            <div>we have an error: {JSON.stringify(props.apiError, null, 2)}</div>
        );
    } else if (props.details.data) {
        displayDetails = (
            displayDetails = <Dashboard details={props.details.data}/>
        );
    } else {
        displayDetails = (
            <div>we have something else: {JSON.stringify(props, null, 2)}</div>
        );
    }



    return <div>{displayDetails}</div>;
}

export default apiOutputList;
