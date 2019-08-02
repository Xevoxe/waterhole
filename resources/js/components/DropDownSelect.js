import React, {useState,useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDropDown = styled.div`
    position: absolute;
    transform: translate3d(0px, 38px, 0px);
    top: 0px;
    left: 0px;
    will-change: transform;  
    min-width: 100%;
    background-color: white;
    z-index: 1000;
    padding: 0 15px;
`;

const DropDownSelect = ({title,children,RenderList,onSelect,className})=>{
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
        <div className={`dropdown-wrapper ${className}`}>
            <button ref={el} onClick={handleExpand} id="dropdown-btn" aria-haspopup="true" aria-expanded={expanded} aria-labelledby="dropdown-btn dropdown-categories">
                {label}
            </button>
            {
                expanded ?
                    <StyledDropDown> 
                        <RenderList onSelect={handleSelection} selected={selected}>
                            {children}
                        </RenderList>
                    </StyledDropDown>
                : null
            }
        </div>
    );
}

export default DropDownSelect;

const defaultRenderList = ({children,onSelect,selected}) => (
    <ul className="dropdown-selection" aria-labelledby="dropdown-categories" role="listbox" tabIndex="-1">
        {children.map((node) =>
        <li className="selection-item" id={`item-${node.props.dataid}`} key={node.props.dataid} onClick={onSelect} data-id={node.props.dataid} role="option">{node.props.children}</li>)}
    </ul>
)

DropDownSelect.propTypes={
    onSelect: PropTypes.func.isRequired
}

DropDownSelect.defaultProps={
    RenderList: defaultRenderList
}

