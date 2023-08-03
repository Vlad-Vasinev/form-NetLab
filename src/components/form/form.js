import React, { useState, lazy } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import classes from './form.module.css';
import Select from 'react-select'

import { addDataForm } from "../../store/formReducer";


const Form = () => {

    const [flag, setFlag] = useState(false);

    // const [colorFlag, setColorFlag] = useState(true);
    const [emailFlag, setEmailFlag] = useState(false);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userTheme, setUserTheme] = useState("");
    const [userMessage, setUserMessage] = useState("");
    
    const validRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    function setName(e) {
        setUserName(e.target.value);
    }
    function setEmail(e) {
        if(!validRegex.test(String(e.target.value).toLowerCase())) {
            setEmailFlag(false)
            setUserEmail(e.target.value);
        }
        else if(validRegex.test(String(e.target.value).toLowerCase()))  {
            setEmailFlag(true)
            setUserEmail(e.target.value);
        }
    }
    function setTheme(userChoice) {
        setUserTheme(userChoice);
    }
    function setMessage(e) {
        setUserMessage(e.target.value);
    }

    const dispatch = useDispatch();

    const options = [
        { value: "Тема 1", label: "Тема 1" },
        { value: "Тема 2", label: "Тема 2" },
        { value: "Тема 3", label: "Тема 3" },
        { value: "Тема 4", label: "Тема 4" },
        { value: "Тема 5", label: "Тема 5" },
    ]

    function formSubmit(e) {
        setFlag(true);
        e.preventDefault();
    }

    function clearBtn() {
        console.log("clear click");
        setUserName("");
        setUserEmail("");
        setUserTheme("");
        setUserMessage("");
    }
    function sendBtn() {
        const newFormData = {
            name: userName,
            email: userEmail,
            theme: userTheme,
            message: userMessage
        }
        dispatch(addDataForm(newFormData));
    }

    const borderNew = {
        border: "3px solid #00F968"
    };

    const borderOld = {
        border: "3px solid red"
    };

    return (
        <div className={classes.formWrapper}>
            <div className={classes.formInner}>
                <form className={classes.form} onSubmit={formSubmit}>
                    <h2 className={classes.label}>Форма для тебя</h2>
                    <input
                        value={userName}
                        onChange={setName}
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = "Представьтесь пожалуйста"}
                        required
                        type="text"
                        className={classes.input}
                        placeholder="Представьтесь пожалуйста"></input>
                    <input
                        style={ emailFlag ? borderNew : borderOld }
                        value={userEmail}
                        onChange={setEmail}
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = "Введите ваш e-mail"}
                        required
                        type="email"
                        className={classes.input}
                        placeholder="Введите ваш e-mail"></input>
                    <Select
                        onChange={(choice) => setTheme(choice.value)}
                        className={classes.select}
                        placeholder="Тема сообщения" options={options} />
                    <textarea
                        value={userMessage}
                        onChange={setMessage}
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = "Введите сообщение"}
                        required
                        type="text"
                        placeholder="Введите сообщение"
                        className={classes.textarea}></textarea>
                    <button type="button" className={classes.btnClear} onClick={clearBtn}>Сбросить</button>
                    <button className={classes.btnSend} onClick={sendBtn}>Отправить</button>
                    {
                        flag ? <Navigate to="/mainRoot" /> : <Navigate to="/form" />
                    }
                </form>
            </div>
        </div>
    )
}

export default Form;