import React from 'react'
import "./style.css"


// Team C
const TextArea = (props) => {
    return (
        <div className='ta_box'>
            <div className="form-group">
                <label>{props.children}</label>
                <input type="text" className="form-control" />
            </div>
        </div>
    )
}

export default TextArea
