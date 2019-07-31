import React, {Fragment} from 'react'
import ReactToolTip from 'react-tooltip';

const ToolTipBtn = ({toolTipText,onClick,classNames,toolTipId,children})=>{
    
    const renderToolTip = ()=> {
        return(
            <span>{toolTipText}</span>  
        );
    }
    return(
        <Fragment>
            <button className={classNames} onClick={onClick} data-for={toolTipId} data-tip={toolTipText}>
                {children}
            </button>
            <ReactToolTip className="bg-secondary" id={toolTipId} place="bottom" effect="solid" getContent={renderToolTip}/>  
        </Fragment>
    )
}

export default ToolTipBtn;