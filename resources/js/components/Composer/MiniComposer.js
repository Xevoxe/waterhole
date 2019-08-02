import React, {Fragment} from 'react'
import {FiChevronUp,FiX, FiPrinter} from 'react-icons/fi';
import {composerCancel} from '../../redux/composerActions';
import ToolTipBtn from '../Views/ToolTipBtn';
import withRedux from '../hoc/withRedux';

const MiniComposer = ({onClick})=>{

    const StateToolTipBtn = withRedux(composerCancel)(ToolTipBtn);
    const styles = {
        icons: {
            color: "white"
        },
        miniComposer: {
            cursor: "pointer",
            minHeight: "50px",
            alignItems: "center"
        }
    }
    
    return(
        <div onClick={onClick} style={styles.miniComposer} className="container-fluid bg-primary text-white d-inline-flex justify-content-between p-1">
            <div>
                Select to resume draft.
            </div>
            <div className="composer-controls">
                <button className="btn btn-ghost ml-auto p-0">
                    <FiChevronUp style={styles.icons} />
                </button>
                <StateToolTipBtn  toolTipId="cancel" toolTipPos="top" toolTipText="Cancel Draft" classNames="btn btn-ghost ml-auto p-0">
                    <FiX style={styles.icons}/>
                </StateToolTipBtn>
            </div>
        </div>
    );
}

export default MiniComposer;