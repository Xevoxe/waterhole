import React, {useContext} from 'react';
import {ComposerContext} from './ComposerContext';
import DropDownSelect from './DropDownSelect';

import styled from 'styled-components';
import {StyledDropDownSelect} from './StyledComponents';


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

    const FormWrapper = styled.div.attrs({
        className: 'container'
    })``;

    const FormInput = styled.div.attrs({
        className: 'editor-input row'
    })``;

    const TitleInput = styled.div.attrs({
        className: 'col-sm-8 mb-2'
    })`
        input{
            border-color: ${props=>props.theme.primary};
        }
    `;

    const CategorySelect = styled.div.attrs({
        className: `category-selection col-sm-4 mb-2`
    })`
    `;

    return(
        <FormWrapper>
            <FormInput>
                <TitleInput>
                    <input onChange={(e)=>{updateFormData(e.target.value,"title")}} type="text" className="form-control" placeholder="Type title here."></input>
                </TitleInput>
                <CategorySelect>
                    <StyledDropDownSelect onSelect={handleSelect} title="All Categories">
                        {data.map((category) => <li onClick={handleSelection} key={category.id} dataid={category.id}>{category.label}</li>)}
                    </StyledDropDownSelect>
                </CategorySelect>
            </FormInput>
        </FormWrapper>
    );

}
export default ComposerForm