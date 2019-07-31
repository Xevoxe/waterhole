import React from 'react';

const Button = (props) => {
    const {classNames} = props;
    return (
        <button 
            onClick={()=>{
               props.onClick();
          }} type="button" 
          className={classNames}>
          {props.children}
        </button>
    )
}
export default Button