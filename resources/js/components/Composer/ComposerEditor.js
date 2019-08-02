// Import React!
import React, {Component, useState} from 'react';
import { Editor } from 'slate-react';
import Html from 'slate-html-serializer';
import { Value } from 'slate';

import {rules} from './EditorSerialization';


const html = new Html({rules});
 

const initialValue = '<p>Test</p>';

const ComposerEditor = ({onEditorChange}) =>{


  const [state,updateState] = useState(html.deserialize(initialValue));

  const onChange = ({value})=>{
    if (value.document != state.document) {
      const string = html.serialize(value);
      onEditorChange(string);
    }
  
    updateState(value);
    //updatePreview(value);
  }

  return <Editor value={state} onChange={onChange} />

}

export default ComposerEditor;
