import React, { useState } from "react";
import { Alert, Space } from 'antd';

import classes from './startRoute.module.css'

import { Link } from 'react-router-dom'

const onClose = (e) => {
    console.log(e, 'I was closed.');
};

const StartRoute = () => {

    return (
        <div className={classes.startRouteWrapper}>
            <div>
                <Space
                    direction="vertical"
                >
                    <Alert
                        message="Form data: Форма пока не заполнена"
                        type="warning"
                        closable
                        onClose={onClose}
                    />
                </Space>
                <Link className={classes.Link} to="/form" >Заполнить форму</Link>
            </div>
        </div>
    )
}

export default StartRoute;