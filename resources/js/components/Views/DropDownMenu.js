
import React, {useState} from 'react';

const DropDownMenu = ({children,title,onSelect})=>{

        const styles=({
            textAlign: "left",
            width: "100%",
        });
    
        const [label, select] = useState(title);


        const handleClick = (e) =>{
            select(e.currentTarget.dataset.label);
            onSelect(e.currentTarget.dataset.id);
        };

    return(
        <div className="dropdown">
            <button className="btn dropdown-toggle btn-outline-primary d-inline-flex w-100 justify-content-center align-items-center" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div style={styles}>{label}</div>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                {children.map((child, index)=>{
                    return(
                        <DropDownItem onClick={handleClick} dataId={child.props['data-id']} dataLabel={child.props['data-label']} key={index}>{child}</DropDownItem>
                    )
                })}
            </ul>
        </div>
    );
}


export const DropDownItem = ({children,onClick,dataLabel,dataId})=>{
    return(
        <li>
        <button onClick={onClick} data-id={dataId} data-label={dataLabel}  className="dropdown-item" type="button" role="option" tabIndex="-1">{children}</button>
        </li>
    )
}

export default DropDownMenu;