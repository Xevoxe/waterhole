import React from 'react';

import View from './View';
import {ComposerContext} from './ComposerContext';


const initialState = {
    title: "",
    category: 0,
    content: "",
    height: '375',
    fullscreen: false,
    pmMode: false,
    minimized: false,
}

class Composer extends React.Component{
    
    constructor(props){
        super(props);

        this.updateFormData = this.updateFormData.bind(this);

        this.state ={
            formData:{
                title: "",
                category: 0,
                content: ""
            },
            isFullscreen: false,
            isPmMode: false,
            isMinimized: false,
            updateFormData: this.updateFormData
        };
    }

    updateFormData(value,field){
        this.setState({
            [field]:value
        })
    }

    render(){
        return(
            <ComposerContext.Provider value ={this.state}>
                <View />
            </ComposerContext.Provider>
        )
    }
}
export default Composer;