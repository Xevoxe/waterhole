import React, {useState,useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropDownSelect = ({title,classNames,styles,children,RenderList,onSelect,style})=>{
    const [expanded,onExpanded] = useState(false);
    const [selected,onSelection] = useState(null);
    const [label,onSelectionChange] = useState(title)
    const el = useRef(null);
    
    const handleExpand = ()=>{
        onExpanded(!expanded);
        el.current.focus();
    }
    
    
    const handleSelection =(e) =>{
        if(selected){
            selected.removeAttribute("aria-selected");
        }
        onSelection(e.currentTarget);
        onSelectionChange(e.currentTarget.innerText)
        onExpanded(false);
        e.currentTarget.setAttribute("aria-selected","true");
    }

    return (
        <div className="dropdown-wrapper">
            <button ref={el} onClick={handleExpand} id="dropdown-btn" aria-haspopup="true" aria-expanded={expanded} aria-labelledby="dropdown-btn dropdown-categories">
                <span id="dropdown-categories">{label}</span>
            </button>
            {
                expanded ? 
                    <RenderList onSelect={handleSelection} selected={selected}>
                        {children}
                    </RenderList>
                : null
            }
        </div>
    );
}

export default DropDownSelect;

const defaultRenderList = ({children,onSelect,selected,classNames}) => (
    <ul className="dropdown-selection" aria-labelledby="dropdown-categories" role="listbox" tabIndex="-1">
        {children.map((node) =>
        <li className="selection-item" id={`item-${node.props.dataid}`} key={node.props.dataid} onClick={onSelect} data-id={node.props.dataid} role="option">{node.props.children}</li>)}
    </ul>
)

DropDownSelect.propTypes={
    onSelect: PropTypes.func.isRequired
}

DropDownSelect.defaultProps ={
    RenderList: defaultRenderList
}

