import React, { useState } from "react";
import { useSelector } from 'react-redux';

import classes from './mainRoot.module.css';

import { Navigate } from "react-router-dom";

const MainRoot = () => {

    const [flag, setFlag] = useState(false);

    function changeData () {
        setFlag(true);
    }

    const userName = useSelector(state => state.form.userName);
    const userEmail = useSelector(state => state.form.userEmail);
    const userTheme = useSelector(state => state.form.userTheme);
    const userMessage = useSelector(state => state.form.userMessage);

    return (
        <div className={ classes.mainRootWrapper }>
            main Root
            <div className={ classes.mainRootEl }>
                Name: <p>{userName}</p>
            </div>
            <div className={ classes.mainRootEl }>
                Email: <p>{userEmail}</p> 
            </div>
            <div className={ classes.mainRootEl }>
                Theme: <p>{userTheme}</p> 
            </div>
            <div className={ classes.mainRootEl }>
                Message: <p>{userMessage}</p> 
            </div>
            <button onClick={changeData} className={ classes.changeData }>Изменить</button>
            { 
                flag ? <Navigate to="/changeData"/> : <Navigate to="/mainRoot"/>
            }
        </div>
    )
}

export default MainRoot;