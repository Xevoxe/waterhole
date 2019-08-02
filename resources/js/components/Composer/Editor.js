import React from 'react';
import ComposerEditor from './ComposerEditor';
import styled from 'styled-components';

const StyledEditor = styled.div`
    border: 1px solid ${props=>props.theme.primary};
    border-radius: .25rem;
    width: 100%;
`;

const EditorWrapper = styled.div.attrs({className: "col mb-2"})`
    display: flex;
    flex-grow: 1;
`;


const handleEditorChange = () => {

}


const Editor = () =>
    <EditorWrapper>
        <StyledEditor>
            <ComposerEditor onEditorChange={handleEditorChange}/>
        </StyledEditor>
    </EditorWrapper>
export default Editor;