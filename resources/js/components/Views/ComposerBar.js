import React, {Fragment, useEffect} from 'react'


import ToolTipBtn from './ToolTipBtn';
import {FiToggleLeft,FiToggleRight, FiMaximize2,FiMinimize2, FiChevronDown,FiChevronUp} from 'react-icons/fi';

const ComposerBar = (props)=>{
    
    const {onSwitchMode,onFullScreen,onMinimize,mode,fullScreen,minimized} = props;

    return(
        <Fragment>
                <div className="composer-type d-inline-flex">
                    {
                        mode ?
                        <Fragment>
                            <ToolTipBtn onClick={onSwitchMode} classNames="btn btn-ghost" toolTipId="state-pm" toolTipText="Private Messenger">
                                <FiToggleRight/>
                            </ToolTipBtn>
                            <h2 className="m-1 align-self-center"><small>Private Messenger</small></h2>
                        </Fragment>
                        :
                        <Fragment>
                            <ToolTipBtn onClick={onSwitchMode} classNames="btn btn-ghost" toolTipId="state-composer" toolTipText="Composer">
                                <FiToggleLeft/>
                            </ToolTipBtn>
                            <h2 className="m-1 align-self-center"><small>Create a new Topic</small></h2>
                        </Fragment>                    
                    }
                </div>
                <div className="composer-controls">
                        { fullScreen ?
                            <ToolTipBtn onClick={onFullScreen} classNames="btn btn-ghost ml-auto p-0" toolTipId="windowed" toolTipText="Exit FullScreen">
                                <FiMinimize2 />
                             </ToolTipBtn>
                            :
                            <ToolTipBtn onClick={onFullScreen} classNames="btn btn-ghost ml-auto p-0" toolTipId="fullscreen" toolTipText="Enter FullScreen">
                                <FiMaximize2 />
                            </ToolTipBtn>
                        }
                        
                        <ToolTipBtn onClick={onMinimize} classNames="btn btn-ghost ml-auto p-0 pr-2" toolTipId="minimize" toolTipText="Minimize">
                            <FiChevronDown/>
                        </ToolTipBtn>

                    </div>
        </Fragment>
    );

}
export default ComposerBar;
