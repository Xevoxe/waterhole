import React, {useState, Fragment} from 'react';


import ReactToolTip from 'react-tooltip';
import ComposerBar from './ComposerBar';
import Grippie from '../Grippie';
import ComposerForm from './ComposerForm';
import MiniComposer from './MiniComposer';
import {IconContext} from 'react-icons';

const Composer = (props)=> {

    const [isPMmode,switchMode] = useState(false);
    const [isFullScreen,switchScreen] = useState(false);
    const [isMinimized, minimize] = useState(false);
    const [height, changeHeight] = useState(375);

    const handleSwitchMode = ()=>{
        switchMode(!isPMmode);
    }

    const handleSwitchScreen = ()=>{
        switchScreen(!isFullScreen);
        ReactToolTip.hide();
    }

    const handleMinimize = ()=>{
        minimize(!isMinimized);
    }

    const handleChangeHeight = (height) =>{
        changeHeight(height);
    }
  
    return(
        <IconContext.Provider value={{size: "1.5em", color:"grey"}}>
                {
                    isMinimized ?
                        <MiniComposer onClick={handleMinimize} />
                    :
                    <div style={{height: height}} className={`composer-container bg-light container-fluid fixed-bottom p-0`+ (isFullScreen ? "vh-100" : "")}>
                       {isFullScreen ? null : 
                        <Grippie 
                                minHeight= {260}
                                height={height}
                                onChangeHeight={handleChangeHeight}
                        />}
                            <div className="editor d-flex flex-column">
                                <div className="row align-items-center justify-content-between px-3 py-1">
                                        <ComposerBar 
                                            mode={isPMmode} 
                                            fullScreen={isFullScreen} 
                                            minimized={isMinimized}
                                            onSwitchMode={handleSwitchMode}
                                            onFullScreen={handleSwitchScreen}
                                            onMinimize={handleMinimize}
                                        />
                                    </div>
                                    <div className="row flex-grow-1 container-fluid mx-auto mx-sm-1">
                                        <div className="col-sm-7 col-md-6 d-flex flex-grow-1 flex-column">
                                            { isPMmode ? null : <ComposerForm />}
                                        </div>
                                    </div>
                            </div>
                    </div>
                }
        </IconContext.Provider>
    )
}

export default Composer;