import React from 'react';
import PropTypes from 'prop-types';
import ReactToolTip from 'react-tooltip';

const UIBtn = ({onClick, classNames,id,tipContent,tipPos,tipEffect,renderTip,children})=>{
    return(
         <React.Fragment>
        <button onClick={onClick} className={classNames} data-for={id} data-tip={tipContent}>
            {children}
        </button>
        <ReactToolTip className="bg-secondary tool-tips" id={id} place={tipPos} effect={tipEffect} getContent={renderTip}/>
        </React.Fragment>
    )
};

UIBtn.propTypes = {
    onClick : PropTypes.func.isRequired
}

UIBtn.defaultProps = {
    tipPos : "bottom",
    tipEffect: "solid",
    renderTip: (children)=><span>{children}</span>,
    id : "tool-tip",
    tipContent : "Popup Tip",
    classNames : "btn btn-ghost"

}

export default UIBtn;







