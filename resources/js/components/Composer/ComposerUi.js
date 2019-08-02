import React, {useContext} from 'react';
import {ComposerContext} from './ComposerContext';
import PropTypes from 'prop-types';
import UIBtn from './UIBtn';
import {IconContext} from 'react-icons';
import styled from 'styled-components';
import {ToggleLeft, ToggleRight} from 'styled-icons/boxicons-regular';
import {Minimize,Maximize} from 'styled-icons/feather';
import {Fullscreen,FullscreenExit} from 'styled-icons/material';




const ComposerToggle = styled(ToggleLeft)`
    width: 30px
    color: ${props =>props.theme.secondary};
`;

const PmToggle = styled(ToggleRight)`
    width: 30px
    color: ${props =>props.theme.secondary};
`;

const Minimized = styled(Minimize)`
    width: 20px
    color: ${props =>props.theme.secondary};
`;
const Maximized = styled(Maximize)`
    width: 20px
    color: ${props =>props.theme.secondary};
`;
const FullScrn = styled(Fullscreen)`
    width: 25px
    color: ${props =>props.theme.secondary};
`;
const Windowed = styled(FullscreenExit)`
    width: 25px
    color: ${props =>props.theme.secondary};
`;


const ComposerUi = () => {
    const {isPmMode,updateFormData,isFullscreen,isMinimized} = useContext(ComposerContext);
    return (
        <IconContext.Provider  value={{size: "1.5em", color:"grey"}}>
            <div className="composer-ui container-fluid row justify-content-between p-0 m-0">
                <div className="composer-ui-toggle">
                <UIBtn id="mode" tipContent="Switch Editor Modes" onClick={()=>{updateFormData(!isPmMode,"isPmMode")}}>
                    {
                        isPmMode ? <PmToggle /> : <ComposerToggle/>
                    }
                </UIBtn>
                <span className="composer-ui-title">{isPmMode ? "Private Messenger" : "Compose New Topic"}</span>
                </div>
                <div className="composer-ui-controls d-inline-flex pr-2">
                    <UIBtn id="fullscreen" tipContent="Toggle FullScreen" classNames="btn btn-ghost p-1" onClick={()=>{updateFormData(!isFullscreen,"isFullscreen")}}>
                        {
                            isFullscreen ? <Windowed /> : <FullScrn/>
                        }
                    </UIBtn>
                    <UIBtn id="minimized" tipContent="Toggle Minimized" classNames="btn btn-ghost p-1" onClick={()=>{updateFormData(!isMinimized,"isMinimized")}}>
                    {
                        isMinimized ? <Maximized /> : <Minimized/>
                    }
                    </UIBtn>
                </div>
            </div>
        </IconContext.Provider>
    );
}


export default ComposerUi;