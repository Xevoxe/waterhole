import React from 'react';
import PropTypes from 'prop-types';

import Grippie from './Grippie';
import ComposerUi from './ComposerUi';
import ComposerForm from './ComposerForm';



const View = ({ RenderGrippie,RenderComposerUI,RenderComposerForm

    })=> 
        (
            <div className="composer-container bg-light container-fluid p-0">
                <RenderGrippie />
                <RenderComposerUI />
                <RenderComposerForm />

            </div>
        )
export default View;

View.defaultProps={
    RenderGrippie: Grippie,
    RenderComposerUI: ComposerUi,
    RenderComposerForm: ComposerForm
};