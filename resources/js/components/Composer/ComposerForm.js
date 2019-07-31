import React, {useContext} from 'react';
import {ComposerContext} from './ComposerContext';
import DropDownSelect from './DropDownSelect';

import styled from 'styled-components';


const data = [
    {
        id:1,
        label: "News"
    },
    {
        id:2,
        label:"Bugs"
    }
]





const ComposerForm = () => {
    const {updateFormData} = useContext(ComposerContext);
    const handleSelect = ()=>{
        console.log("handle Select");
    }

    const handleSelection = () =>{

    }

    return(
        <div className="editor-wrapper container">
            <div className="row">
                <div className="title-input col-sm-8">
                    <input onChange={(e)=>{updateFormData(e.target.value,"title")}} type="text" className="form-control border-primary" placeholder="Type title here."></input>
                </div>
                <div className="category-selection col-sm-4 pt-2 pt-sm-0 ">
                    <DropDownSelect onSelect={handleSelect} title="All Categories">
                        {data.map((category) => <li onClick={handleSelection} key={category.id} dataid={category.id}>{category.label}</li>)}
                    </DropDownSelect>
                </div>
            </div>
        </div>
    );

}
export default ComposerForm