import React from 'react'

import './Button.css'

const Button = ({content, type, handleButtonClick }) => {
    return (
        <div
          className={`Button ${content === "0" ? "zero" : ""} ${type}`}
          onClick={(event)=> handleButtonClick(event,content)}
        >
          {content}
        </div>
      );
}
 
export default Button;