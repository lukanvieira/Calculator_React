import React from "react";
import './Button.css'

const Buttons = props => {
    let classes = 'button '
    return (
        <button className={classes}>
            {props.label}
        </button>
    )
}

export default Buttons