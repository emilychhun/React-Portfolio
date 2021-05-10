import classes from "./PageHeader.module.css"
import React from 'react'

function PageHeader(props) {
    return (
        <div className={classes.Container}>
            <hr/>
            <h1 className="aboutMe">{props.title}</h1>
        </div>
    )
}

export default PageHeader

