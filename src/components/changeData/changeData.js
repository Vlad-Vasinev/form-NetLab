import React from "react";

import classes from './changeData.module.css';

const Form = React.lazy(() => import("../form/form"));

const ChangeData = () => {
    return (
        <div>
            This is ChangeData
            <Form></Form>
        </div>
    )
}

export default ChangeData;