import React, {useContext} from 'react';
import {ComposerContext} from './ComposerContext';
import PropTypes from 'prop-types';
import UIBtn from './UIBtn';
import {IconContext} from 'react-icons';


import {FiToggleLeft,FiToggleRight, FiMaximize2,FiMinimize2, FiChevronDown,FiChevronUp} from 'react-icons/fi'; 

const ComposerUi = () => {
    const {isPmMode,updateFormData,isFullscreen,isMinimized} = useContext(ComposerContext);
    return (
        <IconContext.Provider  value={{size: "1.5em", color:"grey"}}>
            <div className="composer-ui container-fluid row justify-content-between p-0 m-0">
                <div className="composer-ui-toggle">
                <UIBtn id="mode" tipContent="Switch Editor Modes" onClick={()=>{updateFormData(!isPmMode,"isPmMode")}}>
                    {
                        isPmMode ? <FiToggleRight /> : <FiToggleLeft/>
                    }
                </UIBtn>
                <span className="composer-ui-title">{isPmMode ? "Private Messenger" : "Compose New Topic"}</span>
                </div>
                <div className="composer-ui-controls d-inline-flex">
                    <UIBtn id="fullscreen" tipContent="Toggle FullScreen" classNames="btn btn-ghost p-1" onClick={()=>{updateFormData(!isFullscreen,"isFullscreen")}}>
                        {
                            isFullscreen ? <FiMaximize2 /> : <FiMinimize2/>
                        }
                    </UIBtn>
                    <UIBtn id="minimized" tipContent="Toggle Minimized" classNames="btn btn-ghost p-1" onClick={()=>{updateFormData(!isMinimized,"isMinimized")}}>
                    {
                        isMinimized ? <FiChevronUp /> : <FiChevronDown/>
                    }
                    </UIBtn>
                </div>
            </div>
        </IconContext.Provider>
    );
}


export default ComposerUi;