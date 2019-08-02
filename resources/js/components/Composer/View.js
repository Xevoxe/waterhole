import React from 'react';
import PropTypes from 'prop-types';

import Grippie from '../Grippie';
import ComposerUi from './ComposerUi';
import ComposerForm from './ComposerForm';
import Editor from './Editor';
import FormControls from './FormControls';



const View = ({ RenderGrippie,RenderComposerUI,RenderComposerForm, RenderEditor, RenderFormControls

    })=> 
        (
            <div className="composer-container bg-light container-fluid p-0">
                <RenderGrippie> 
                    <RenderComposerUI />
                    <RenderComposerForm />
                    <RenderEditor />
                    <RenderFormControls />
                </RenderGrippie>

            </div>
        )
export default View;

View.defaultProps={
    RenderGrippie: Grippie,
    RenderComposerUI: ComposerUi,
    RenderComposerForm: ComposerForm,
    RenderEditor: Editor,
    RenderFormControls: FormControls
};