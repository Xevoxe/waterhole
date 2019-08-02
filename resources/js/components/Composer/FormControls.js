import React,{useContext} from 'react';
import withRedux from '../hoc/withRedux';
import {ComposerContext} from './ComposerContext';
import Button from '../Views/Button';
import {composerCancel,composerPost} from '../../redux/composerActions';
import styled from 'styled-components';


const FormControlsWrapper = styled.div.attrs({className: 'col'})`
    flex-grow: 0;
    justify-content:center;
    display: inline-flex;
    justify-content:left;
    margin-bottom: 20px;
`;

const StyledPostBtn = styled(Button)`
    background-color: ${props => props.theme.highlight};
    width: 130px;
    margin-right: 5px;
    justify-content:center;
`;
const StyledCancelBtn = styled(Button)`
    flex-grow: 0;
    justify-content:center;
    width: 130px;
`;

const FormControls = (props) =>{

    const context = useContext(ComposerContext);
    const CancelBtn = withRedux(composerCancel)(StyledCancelBtn);
    const PostBtn = withRedux(composerPost)(StyledPostBtn);

    return(
        <FormControlsWrapper className={props.className}>
                <PostBtn solid onClick={()=> {return}}>
                    Post Topic
                </PostBtn>            
            <CancelBtn>
                Cancel
            </CancelBtn>
        </FormControlsWrapper>
    );
}

export default FormControls;